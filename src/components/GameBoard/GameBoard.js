import { useEffect, useReducer, useState } from 'react';
import { useFetchImage } from '@/utils';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { Loading } from '@/components/Loading';
import { Card } from '@/components/Card';
import { gameCardDataReducer } from './GameStateManagment/reducer';
import { getIsPlayingCardsMatch, getPlayingCardsIds, getPlayingCards } from './GameStateManagment/helpers';
import Image from 'next/image';

export function GameBoard() {
  const [selectedPhotosTheme, setSelectedPhotosTheme] = useState('cat');
  const {
    photos,
    isLoading,
    errorMessage
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
          type: isPlayingCardsMatched ?'handleSelectMatches': 'handleSelectUnmatched',
          payload: playingCardsIds
        })
      }, 1000);
    }
  }, [gameCards, isLockedNewAction])

  function FlipCard(cardId) {
    dispatchGameCardData({type: 'flipCard', payload: cardId})
  }

  return (
    <div>
      {/* TODO: move this to seprate component */}
      <div className='flex justify-evenly items-center'>
        {/* TODO: make it to request new set of images after reset */}
        <button
          className="my-2 bg-amber-400 text-amber-800 p-2 rounded-sm border-y-4 border-transparent hover:bg-transparent hover:text-amber-100 hover:border-amber-500"
          type="reset"
          onClick={() => dispatchGameCardData({type: 'initNewGame', payload: photos})}
        >
          Reset game
        </button>
        <label>
          Pick the Photo theme: {' '}
          <select
            className="text-amber-400"
            value={selectedPhotosTheme}
            onChange={e => setSelectedPhotosTheme(e.target.value)}
          >
            <option value="cat">Cute Cat</option>
            <option value="dog">Lovely Dog</option>
            <option value="lofty giraffe">Lofty Giraffe</option>
          </select>
        </label>
      </div>
      {isLoading && <Loading />}
      {errorMessage && <ErrorDisplay errorMessage={errorMessage}/>}
      {/* TODO: move this to other component */}
      {!isLoading && !errorMessage && (
        <ul className='flex flex-wrap justify-center gap-2 mt-8'>
          {gameCards.map(card => {
            const selectedImageData = photos.filter(photo => photo.id === card.imgId);

            return (
              <li key={card.id}>
                <Card
                  state={card.cardState}
                  onClick={() => FlipCard(card.id)}
                  isLocked={isLockedNewAction}
                >
                  {selectedImageData[0] &&
                    <Image
                      src={selectedImageData[0].url}
                      width={selectedImageData[0].width}
                      height={selectedImageData[0].height}
                      alt={selectedImageData[0].alt}
                      className="w-full"
                    />
                  }
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}