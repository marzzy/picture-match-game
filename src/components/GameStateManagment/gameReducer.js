import { getRandomInt, getRandomUniqueNum } from '@/utils';
import { GAME_ACTIONS, GAME_STATE, initGame } from './fixture';
import {handleUncompleteMove, handleMatchMove, handleUnmatchMove, cleanTheUnmatchMove } from './actionMoveHandler';

function setNewGameCards(photosDetails){
  const photosIdsList = photosDetails.map(photoDetails => photoDetails.id);
  const gameCardsImagesIDsList = [...photosIdsList, ...photosIdsList]; // we will show each image 2 times
  const gameCardsData = [];

  for(let i =0; i < photosDetails.length*2 ;i++) {
    let indexOfSelectedPhotoId = getRandomInt(gameCardsImagesIDsList.length); // randomly select one avilable id from gameCardsImagesIDsList
    let selectedPhotoId =gameCardsImagesIDsList[indexOfSelectedPhotoId];
    gameCardsData.push({
      cardId: getRandomUniqueNum(),
      imgId: selectedPhotoId,
    });
    gameCardsImagesIDsList.splice(indexOfSelectedPhotoId, 1); // remove the id of selected photo from the gameCardsImagesIDsList not to selected more than 1
  }
  return gameCardsData;
}

function handleGameStateChange(currentState, newGameState) {
  return {
    ...currentState,
    gameState: newGameState
  }
}

export function gameReducer(state, action) {
  switch(action.type) {
    case GAME_ACTIONS.SET_CARDS: {
      return {
        ...initGame,
        gameCards: setNewGameCards(action.payload.photosList),
        gameState: GAME_STATE.LOAD_IMAGES
      }
    }
    case GAME_ACTIONS.RESET_PHOTOS: {
      return initGame;
    }
    case GAME_ACTIONS.START_GAME: {
      return handleGameStateChange(state, GAME_STATE.START)
    }
    case GAME_ACTIONS.START_PLAYING: {
      return handleGameStateChange(state, GAME_STATE.PLAYING)
    }
    case GAME_ACTIONS.UNCOMPLETE_MOVE: {
      return handleUncompleteMove(state, action.payload.selectedCardId);
    }
    case GAME_ACTIONS.MATCHED_MOVE: {
      return handleMatchMove(state, action.payload.selectedCardId);
    }
    case GAME_ACTIONS.UNMATCHED_MOVE: {
      return handleUnmatchMove(state, action.payload.selectedCardId);
    }
    case GAME_ACTIONS.CLEAN_UNMATCHED_MOVE: {
      return cleanTheUnmatchMove(state);
    }
  }
}