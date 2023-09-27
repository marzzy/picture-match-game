import { GAME_STATE } from './fixture'

export function handleUncompleteMove(currentState, selectedCardId) {
  return {
    ...currentState,
    scoreData: {
      ...currentState.scoreData,
      moveCounter: currentState.scoreData.moveCounter+1
    },
    playingCardsId: new Set([selectedCardId])
  }
}

export function handleMatchMove(currentState, selectedCardId) {
  const {gameCards, playingCardsId, matchedCardsId,
    scoreData: {comboMoveCounter, moveCounter , score}
  } = currentState;
  const newMatchedCardsId = new Set([...matchedCardsId, ...playingCardsId, selectedCardId]);
  const newScore = (comboMoveCounter > 0)
    ? score+10+Math.pow(2, comboMoveCounter)
    : score+10;

  return {
    ...currentState,
    gameState:newMatchedCardsId.size === gameCards.length ? GAME_STATE.FINISHED : GAME_STATE.PLAYING,
    playingCardsId: new Set([]),
    matchedCardsId: newMatchedCardsId,
    scoreData: {
      comboMoveCounter: comboMoveCounter+1,
      score: newScore,
      moveCounter: moveCounter+1
    }
  }
}

export function handleUnmatchMove(currentState, selectedCardId) {
  return {
    ...currentState,
    playingCardsId: new Set([...currentState.playingCardsId, selectedCardId]),
    scoreData: {
      ...currentState.scoreData,
      comboMoveCounter: 0,
      moveCounter: currentState.scoreData.moveCounter+1
    }
  }
}

export function cleanTheUnmatchMove(currentState) {
  return {
    ...currentState,
    playingCardsId: new Set([]),
  }
}