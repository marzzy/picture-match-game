export const initialScoreData = {
  comboMoveCounter: 0,
  moveCounter: 0,
  score: 0,
  record: 0,
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
      const newRecord = state.record < newScore ? newScore : state.record;
      localStorage.setItem('record', newRecord);

      return {
        ...state,
        comboMoveCounter: state.comboMoveCounter+1,
        score: newScore,
        record: newRecord
      }
    }
    case 'scoreUnMatchedMove': {
      return {
        ...state,
        comboMoveCounter: 0,
      }
    }
    case 'updateRecord': {
      return {
        ...state,
        record: localStorage.getItem('record') || 0,
      }
    }
    case 'resetScoreData': {
      return {
        ...initialScoreData,
        record: state.record
      };
    }
    default: {
      return state;
    }
  }
}