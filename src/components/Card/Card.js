import './card.css'

export function Card(props) {
  const {children, onClick, isLocked, state} = props;
  const isCardFlipped = state !== 'unmatched';
  const disableToFlip = isLocked || state === 'matched';

  function flipCard(){
    if(!disableToFlip) {
      onClick();
    }
  }

  return (
    <div className={`flip-card flip-card${isCardFlipped ? '-fliped' : ''}`} onClick={flipCard}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          ?
        </div>
        <div className="flip-card-back flex">
          {children}
        </div>
      </div>
    </div>
  )
}