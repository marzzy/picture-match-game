import Image from 'next/image';
import { GAME_STATE, GameContext } from '../GameBoard/GameStateManagment';
import { useContext } from 'react';

export function Card(props) {
  const {onClick, card, increaceLoadedimgsCounter} = props;
  const {
    settings: { selectedcardSize },
    gameDetails: { gameState, playingCardsId, matchedCardsId },
    photosDetails: { photos }
  } = useContext(GameContext);
  const { url , width, height, alt } = photos.find(photo => photo.id === card.imgId);

  const isCardFlipped = 
    gameState === GAME_STATE.START ||
    [...playingCardsId, ...matchedCardsId].includes(card.cardId);
  const isCardFlippingLock = playingCardsId.size === 2 || isCardFlipped;

  function flipCard(){
    if(!isCardFlippingLock) 
      onClick()
  }

  return (
    <div className="perspective" onClick={flipCard}
        style={{ width: `${selectedcardSize}px`, height: `${selectedcardSize}px` }}
    >
      <div className={`relative w-full h-full text-center transition-transform	duration-500 shadow-md shadow-white/10 preserve-3d origin-center ${isCardFlipped && 'rotate-y-180'}`} >
        <div className="bg-stone-800 flex justify-center text-amber-500 items-center text-5xl w-full h-full absolute rounded-md backface-hidden">
          ?
        </div>
        <div className="flex w-full h-full absolute rounded-md backface-hidden bg-stone-300 rotate-y-180 overflow-hiden">
          <Image
            src={url} width={width} height={height} alt={alt}
            className="w-full rounded-md"
            onLoadingComplete={increaceLoadedimgsCounter}
          />
        </div>
      </div>
    </div>
  )
}