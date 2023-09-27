import { useGameStates } from "../GameStateManagment";

export function ErrorDisplay() {
  const { photosDetails: { errorMessage } } = useGameStates();

  return (
    <div>
      <div>Ops! something went wrong trying fetching the images! - {errorMessage}</div>
    </div>
  );
}
