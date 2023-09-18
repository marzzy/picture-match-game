export function ScoreBoard(props) {
  const { score, moveCounter, comboMoveCounter } = props;

  return (
    <div className="flex justify-evenly">
      <div className="relative">
        score: {score}
        {comboMoveCounter>0 && (
          <b className="text-md text-orange-300 absolute w-max animate-pulse right-32">
            COMBO X{comboMoveCounter}
          </b>
        )}
        </div>
      <div> move: {moveCounter} </div>
    </div>
  )
}