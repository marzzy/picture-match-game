export function ScoreBoard(props) {
  const { score, moveCounter, comboMoveCounter, record } = props;

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