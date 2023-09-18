export const initialScoreData = {
  comboMoveCounter: 0,
  moveCounter: 0,
  score: 0
};

export function scoreDataReducer(state, action) {
  switch (action.type) {
    case 'countAMove': {
      return {
        ...state,
        moveCounter: state.moveCounter+1,
      }
    }
    case 'scoreMatchedMove': {
      const newScore = (state.comboMoveCounter > 0)
        ? state.score+10+Math.pow(2, state.comboMoveCounter)
        : state.score+10;

      return {
        ...state,
        comboMoveCounter: state.comboMoveCounter+1,
        score: newScore
      }
    }
    case 'scoreUnMatchedMove': {
      return {
        ...state,
        comboMoveCounter: 0,
      }
    }
    case 'resetScoreData': {
      return initialScoreData;
    }
    default: {
      return state;
    }
  }
}