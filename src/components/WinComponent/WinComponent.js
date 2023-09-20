import { ResetButton } from "../ResetButton"
import { getRandomInt } from "@/utils";
import { recordBeatingPhrases, winPhrases } from "./fixtures";

export function WinComponent({fetchNewPhotos, newRecord}) {
  const randomWinPhrase = winPhrases[getRandomInt(winPhrases.length)];
  const randomBeatingPhrase = recordBeatingPhrases[getRandomInt(recordBeatingPhrases.length)];

  return (
    <div className='w-full h-full z-10 absolute flex top-0 left-0 bg-black/75 justify-center items-center flex-col rounded-md'>
      <div className='bg-transparent text-amber-600 font-semibold'>
        {newRecord ? `🥇 ${randomBeatingPhrase} 🥇` : `🥳 ${randomWinPhrase} 🎉`}
      </div>
      {newRecord && <>
        <div className='bg-transparent text-amber-600'>💎 NEW RECORD: {newRecord} 💎</div>
      </>}
      <ResetButton fetchNewPhotos={fetchNewPhotos} />
    </div>
  )
}