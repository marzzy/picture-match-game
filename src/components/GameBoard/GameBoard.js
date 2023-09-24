import { ErrorDisplay } from '@/components/ErrorDisplay';
import { Loading } from '@/components/Loading';
import { CardsList } from '@/components/CardsList';
import { GameBoardHeader } from '@/components/GameBoardHeader';
import { ScoreBoard } from '@/components/ScoreBoard';
import { WinComponent } from '../WinComponent';
import { GameContext } from './GameStateManagment'
import { useGame } from './GameStateManagment/useGame';

export function GameBoard() {
  const {
    states,
    actions: {
      handleFlipCard,
      startTheGame,
    },
    isLoadingUIDisplay,
    isCardsLoading,
    isTheGameFinished,
  } = useGame();

  return (
    <GameContext.Provider value={states}>
      <div className='relative py-5 h-screen'>
        <GameBoardHeader />
        <ScoreBoard />
        {isTheGameFinished && (<WinComponent />)}
        {isLoadingUIDisplay && <Loading />}
        {states.photosDetails.errorMessage && <ErrorDisplay />}
        {!isCardsLoading && (
          <CardsList
            handleFlipCard={handleFlipCard}
            startTheGame={startTheGame}
          />
        )}
      </div>
    </GameContext.Provider>
  );
}