import { ResetButton } from "../ResetButton"
import { useGameStates } from "../GameStateManagment";
import { getRandomWinPhrase } from './helper';
import { getIfThereIsANewRecord } from "@/utils";

export function WinComponent() {
  const {
    gameDetails: { scoreData: {score} },
  } = useGameStates();
  const newRecord = getIfThereIsANewRecord(score);
  const randomWinPhrase = getRandomWinPhrase(!!newRecord);

  return (
    <div className='w-full h-full z-10 absolute flex top-0 left-0 bg-black/75 justify-center items-center flex-col rounded-md'>
      <div className='bg-transparent text-amber-600 font-semibold'>
        {randomWinPhrase}
      </div>
      {newRecord && (
        <div className='bg-transparent text-amber-600'>💎 NEW RECORD: {newRecord} 💎</div>
      )}
      <ResetButton />
    </div>
  )
}