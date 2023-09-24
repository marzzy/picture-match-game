import { getAndUpdateRecord } from '@/utils'
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../GameBoard/GameStateManagment';

export function ScoreBoard() {
  const {
    gameDetails: { scoreData: { score, moveCounter, comboMoveCounter }}
  } = useContext(GameContext);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    // the loacl storage only available in the client side, so we need to get it in the useeffect
    setRecord(getAndUpdateRecord(score));
  }, [score])

  return (
    <>
      <div className=" font-semibold text-lg flex justify-center">
        🏆 Your Record: {record}
      </div>
      <div className="flex justify-evenly pt-4 items-end">
        <div className="flex flex-col min-h-[50px] min-w-[140px] justify-end">
          {comboMoveCounter>0 && (
            <b className="text-md text-orange-300 w-max animate-pulse">
              ✨ COMBO X{comboMoveCounter} ✨
            </b>
          )}
          <span>
            Score: {score}
          </span>
          </div>
        <div> move: {moveCounter} </div>
      </div>
    </>
  )
}