import { useEffect, useReducer, useState } from 'react';
import { useFetchImage } from '@/utils';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { Loading } from '@/components/Loading';
import { gameCardDataReducer } from './GameStateManagment/reducer';
import { getIsPlayingCardsMatch, getPlayingCardsIds, getPlayingCards } from './GameStateManagment/helpers';
import { CardsList } from '@/components/CardsList';
import { GameBoardHeader } from '../GameBoardHeader';

export function GameBoard() {
  const [selectedPhotosTheme, setSelectedPhotosTheme] = useState('cat');
  const {
    photos,
    isLoading,
    errorMessage,
    fetchNewPhotos
  } = useFetchImage(selectedPhotosTheme);
  const [gameCards, dispatchGameCardData] = useReducer(gameCardDataReducer, []);
  const isLockedNewAction = getPlayingCards(gameCards).length === 2;

  useEffect(() => {
    if(photos.length > 0) {
      dispatchGameCardData({type: 'initNewGame', payload: photos});
    }
  },
  [photos]);

  useEffect(() => {
    if (isLockedNewAction) {
      const isPlayingCardsMatched = getIsPlayingCardsMatch(gameCards);
      const playingCardsIds = getPlayingCardsIds(gameCards);
  
      setTimeout(() => {
        dispatchGameCardData({
          type: isPlayingCardsMatched ? 'handleSelectMatches' : 'handleSelectUnmatched',
          payload: playingCardsIds
        })
      }, 1000);
    }
  }, [gameCards, isLockedNewAction])

  return (
    <div>
      {/* TODO: use context to prevent these props drilling */}
      <GameBoardHeader
        selectedPhotosTheme={selectedPhotosTheme}
        photos={photos}
        setSelectedPhotosTheme={setSelectedPhotosTheme}
        fetchNewPhotos={fetchNewPhotos}
      />
      {isLoading && <Loading />}
      {errorMessage && <ErrorDisplay errorMessage={errorMessage}/>}
      {!isLoading && !errorMessage && (
        <CardsList
          gameCards={gameCards}
          photos={photos}
          isLockedNewAction={isLockedNewAction}
          dispatchGameCardData={dispatchGameCardData}
        />
      )}
    </div>
  );
}