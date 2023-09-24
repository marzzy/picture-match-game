import { ResetButton } from "../ResetButton"
import { getRandomInt, getIfThereIsANewRecord } from "@/utils";
import { recordBeatingPhrases, winPhrases } from "./fixtures";
import { useContext } from "react";
import { GameContext } from "../GameBoard/GameStateManagment";

export function WinComponent() {
  const {
    gameDetails: { scoreData: {score} },
    photosDetails: { fetchNewPhotos }
  } = useContext(GameContext);
  let randomWinPhrase;
  const newRecord = getIfThereIsANewRecord(score)
  if(newRecord) {
    randomWinPhrase = '🥇' + recordBeatingPhrases[getRandomInt(recordBeatingPhrases.length)] + '🥇';
  } else {
    randomWinPhrase = '🥳' + winPhrases[getRandomInt(winPhrases.length)] + '🎉';
  }

  return (
    <div className='w-full h-full z-10 absolute flex top-0 left-0 bg-black/75 justify-center items-center flex-col rounded-md'>
      <div className='bg-transparent text-amber-600 font-semibold'>
        {randomWinPhrase}
      </div>
      {newRecord && (
        <div className='bg-transparent text-amber-600'>💎 NEW RECORD: {newRecord} 💎</div>
      )}
      <ResetButton fetchNewPhotos={fetchNewPhotos} />
    </div>
  )
}