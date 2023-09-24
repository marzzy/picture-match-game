import { Card } from '@/components/Card';
import { useContext } from 'react';
import { GameContext } from '../GameBoard/GameStateManagment';

export function CardsList(props) {
  const { startTheGame, handleFlipCard } = props;
  const { gameDetails: { gameCards } } = useContext(GameContext);
  let loadedimgsCounter = 0;

  function increaceLoadedimgsCounter() {
    if (loadedimgsCounter+1 === gameCards.length) {
      startTheGame();
    } else {
      loadedimgsCounter++;
    }
  }

  return (
    <ul className='flex flex-wrap justify-center gap-2 mt-8'>
      {gameCards.map(card => {
        return (
          <li key={card.cardId}>
            <Card
              card={card}
              onClick={() => handleFlipCard(card.cardId)}
              increaceLoadedimgsCounter={increaceLoadedimgsCounter}
            >
            </Card>
          </li>
        );
      })}
    </ul>
  )
}