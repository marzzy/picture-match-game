export function Card(props) {
  const {children, onClick, isLocked, state, cardsSize} = props;
  const isCardFlipped = state !== 'unmatched';
  const disableToFlip = isLocked || state === 'matched';

  function flipCard(){
    if(!disableToFlip) {
      onClick();
    }
  }

  return (
    <div className="perspective" style={{ width: `${cardsSize}px`, height: `${cardsSize}px` }} onClick={flipCard}>
      <div className={`relative w-full h-full text-center transition-transform	duration-500 shadow-md shadow-white/10 preserve-3d origin-center ${isCardFlipped && 'rotate-y-180'}`} >
        <div className="bg-stone-800 flex justify-center text-amber-500 items-center text-5xl w-full h-full absolute rounded-md backface-hidden">
          ?
        </div>
        <div className="flex w-full h-full absolute rounded-md backface-hidden bg-stone-300 rotate-y-180 overflow-hiden">
          {children}
        </div>
      </div>
    </div>
  )
}