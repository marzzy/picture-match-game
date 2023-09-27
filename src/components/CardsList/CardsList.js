import { Card } from '@/components/Card';
import { useGameActions, useGameStates } from '../GameStateManagment';

export function CardsList() {
  const { startTheGame } = useGameActions();
  const { gameDetails: { gameCards } } = useGameStates();
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
              increaceLoadedimgsCounter={increaceLoadedimgsCounter}
            />
          </li>
        );
      })}
    </ul>
  )
}