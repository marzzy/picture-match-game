import { useContext } from "react";
import { GameContext } from "../GameBoard/GameStateManagment";

export function ErrorDisplay() {
  const { photosDetails: { errorMessage } } = useContext(GameContext);

  return (
    <div>
      <div>Ops! something went wrong trying fetching the images! - {errorMessage}</div>
    </div>
  );
}
