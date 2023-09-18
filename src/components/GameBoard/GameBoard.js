import { useEffect, useReducer, useState } from 'react';
import { useFetchImage } from '@/utils';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { Loading } from '@/components/Loading';
import { gameCardDataReducer } from './GameStateManagment/cardsDataReducer';
import { scoreDataReducer, initialScoreData } from './GameStateManagment/scoreDataReducer';
import { getIsPlayingCardsMatch, getPlayingCardsIds, getPlayingCards, getIsTheGameFinished } from './GameStateManagment/helpers';
import { CardsList } from '@/components/CardsList';
import { GameBoardHeader } from '@/components/GameBoardHeader';
import { ScoreBoard } from '@/components/ScoreBoard';

export function GameBoard() {
  const [selectedPhotosTheme, setSelectedPhotosTheme] = useState('cat');
  const {
    photos,
    isLoading,
    errorMessage,
    fetchNewPhotos
  } = useFetchImage(selectedPhotosTheme);
  const [gameCards, dispatchGameCardData] = useReducer(gameCardDataReducer, []);
  const [scoreData, dispatchScoreData] = useReducer(scoreDataReducer, initialScoreData);
  const isLockedNewAction = getPlayingCards(gameCards).length === 2;
  const isTheGameFinished = getIsTheGameFinished(gameCards);

  useEffect(() => {
    if(photos.length > 0) {
      dispatchScoreData({type: 'resetScoreData'});
      dispatchGameCardData({type: 'initNewGame', payload: photos});
    }
  },
  [photos]);

  useEffect(() => {
    if (isLockedNewAction) {
      const isPlayingCardsMatched = getIsPlayingCardsMatch(gameCards);
      const playingCardsIds = getPlayingCardsIds(gameCards);
      dispatchScoreData({type: isPlayingCardsMatched ? 'scoreMatchedMove' : 'scoreUnMatchedMove'});
      
      setTimeout(() => {
        dispatchGameCardData({
          type: isPlayingCardsMatched ? 'handleSelectMatches' : 'handleSelectUnmatched',
          payload: playingCardsIds
        })
      }, isPlayingCardsMatched ? 0 : 1000);
    }
  }, [gameCards, isLockedNewAction])

  function handleFlipCard(cardId) {
    dispatchGameCardData({type: 'flipCard', payload: cardId});
    dispatchScoreData({type: 'countAMove'});
  }

  return (
    <div>
      {/* TODO: use context to prevent these props drilling */}
      <GameBoardHeader
        selectedPhotosTheme={selectedPhotosTheme}
        photos={photos}
        setSelectedPhotosTheme={setSelectedPhotosTheme}
        fetchNewPhotos={fetchNewPhotos}
      />
      <ScoreBoard {...scoreData} />
      {/* TODO: style the win display  */}
      {isTheGameFinished && <div> you win </div>}
      {isLoading && <Loading />}
      {errorMessage && <ErrorDisplay errorMessage={errorMessage}/>}
      {!isLoading && !errorMessage && (
        <CardsList
          gameCards={gameCards}
          photos={photos}
          isLockedNewAction={isLockedNewAction}
          handleFlipCard={handleFlipCard}
        />
      )}
    </div>
  );
}