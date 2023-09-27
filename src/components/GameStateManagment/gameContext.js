import { createContext, useContext } from "react";
import { useGame } from './useGame';

const GameStates = createContext(null);
const GameActions = createContext(null);

export function useGameStates() {
  return useContext(GameStates);
}
export function useGameActions() {
  return useContext(GameActions);
}

export function GameProvider({children}) { 
  const {
    states,
    actions
  } = useGame();

  return (
    <GameStates.Provider value={states}>
      <GameActions.Provider value={actions}>
        {children}
      </GameActions.Provider>
    </GameStates.Provider>
  )
}