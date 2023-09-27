import { ErrorDisplay } from '@/components/ErrorDisplay';
import { Loading } from '@/components/Loading';
import { CardsList } from '@/components/CardsList';
import { GameBoardHeader } from '@/components/GameBoardHeader';
import { ScoreBoard } from '@/components/ScoreBoard';
import { WinComponent } from '../WinComponent';
import { GAME_STATE, useGameStates } from '../GameStateManagment'

export function GameBoard() {
  const {
    gameDetails: { gameState },
    photosDetails: { errorMessage }
  } = useGameStates();
  const isLoadingUIDisplay = [GAME_STATE.LOAD_CARDS, GAME_STATE.LOAD_IMAGES].includes(gameState) && !errorMessage;
  const isCardsLoading = gameState === GAME_STATE.LOAD_CARDS;
  const isTheGameFinished = gameState === GAME_STATE.FINISHED;
  const hasError = !!(errorMessage);

  return (
      <div className='relative py-5 h-screen'>
        <GameBoardHeader />
        <ScoreBoard />
        {isTheGameFinished && (<WinComponent />)}
        {isLoadingUIDisplay && <Loading />}
        {hasError && <ErrorDisplay />}
        {!isCardsLoading && (<CardsList /> )}
      </div>
  );
}