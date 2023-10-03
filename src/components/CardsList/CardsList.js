import { Card } from '@/components/Card';
import { useGameActions, useGameStates } from '../GameStateManagment';
import { useRef } from 'react';

export function CardsList() {
  const { startTheGame } = useGameActions();
  const { gameDetails: { gameCards } } = useGameStates();
  const loadedimgsCounterRef = useRef(0);

  function increaceLoadedimgsCounter() {
    if (loadedimgsCounterRef.current+1 === gameCards.length) {
      startTheGame();
      loadedimgsCounterRef.current = 0;
    } else {
      loadedimgsCounterRef.current++;
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