import { useEffect, useReducer, useState } from 'react';
import { useFetchImage } from '@/utils';
import { INIT_CARDS_SIZE } from '@/components/Card/fixture';
import {
  GAME_ACTIONS, GAME_STATE, gameReducer, initGame, GAME_DEFAULT_DIFFICULTY_LEVEL, GAME_DEFAULT_PHOTO_THEME
} from '@/components/GameBoard/GameStateManagment'

export function useGame() {
  const [selectedPhotosTheme, setSelectedPhotosTheme] = useState(GAME_DEFAULT_PHOTO_THEME.value);
  const [difficultyLevel, setDifficultyLevel] = useState(GAME_DEFAULT_DIFFICULTY_LEVEL.value);
  const [selectedcardSize, setSelectedCardSize] = useState(INIT_CARDS_SIZE);
  const { photos, isLoading, errorMessage, fetchNewPhotos } =
    useFetchImage(selectedPhotosTheme, difficultyLevel+1, beforeFetchPhotos);
  const [{gameCards, gameState, playingCardsId, matchedCardsId, scoreData }, dispatchGame] =
    useReducer(gameReducer, initGame);

  const isLoadingUIDisplay = [GAME_STATE.LOAD_CARDS, GAME_STATE.LOAD_IMAGES].includes(gameState) && !errorMessage;
  const isCardsLoading = gameState === GAME_STATE.LOAD_CARDS;
  const isTheGameFinished = gameState === GAME_STATE.FINISHED;

  useEffect(() => {
    // create new cards when the new photo were ready
    if(photos.length > 0 && !isLoading && !errorMessage) {
      dispatchGame({ type: GAME_ACTIONS.SET_CARDS, payload: { photosList: photos }})
    }
  }, [photos, isLoading, errorMessage])

  function handleFlipCard(selectedCardId) {
    // There is 3 kind of move happened when user flip a card:
    // 1. matched cards move 2. unmatched cards move 3. first move, which is uncomplete move
    if(playingCardsId.size === 1) {
      const firstCardDetails = gameCards.find(card => card.cardId === [...playingCardsId][0]);
      const secoundCardDetails = gameCards.find(card => card.cardId === selectedCardId);
      const arePlayingCardsMatch = firstCardDetails.imgId === secoundCardDetails.imgId;
  
      if(arePlayingCardsMatch) {
        dispatchGame({ type: GAME_ACTIONS.MATCHED_MOVE, payload: { selectedCardId } })
      } else {
        dispatchGame({ type: GAME_ACTIONS.UNMATCHED_MOVE, payload: { selectedCardId } })
        setTimeout(() => {
          dispatchGame({ type: GAME_ACTIONS.CLEAN_UNMATCHED_MOVE})
        }, 1500);
      }
    } else {
      dispatchGame({ type: GAME_ACTIONS.UNCOMPLETE_MOVE, payload: { selectedCardId } })
    }
  }

  function beforeFetchPhotos() {
    // reset and delete the old cards, before request for new photos 
    dispatchGame({ type: GAME_ACTIONS.RESET_PHOTOS });
  }

  function startTheGame() {
    // show the cards for 5sec and then flip them so the user can start the game
    dispatchGame({ type: GAME_ACTIONS.START_GAME });
    setTimeout(() => {
      dispatchGame({ type: GAME_ACTIONS.START_PLAYING });
    }, 5000)
  }

  return {
    states: {
      settings: {
        selectedPhotosTheme, setSelectedPhotosTheme,
        difficultyLevel, setDifficultyLevel,
        selectedcardSize, setSelectedCardSize,
      },
      gameDetails: {
        gameCards, gameState, playingCardsId, matchedCardsId, scoreData,
      },
      photosDetails: { photos, isLoading, errorMessage, fetchNewPhotos }
    },
    actions: {
      handleFlipCard,
      startTheGame,
    },
    isLoadingUIDisplay,
    isCardsLoading,
    isTheGameFinished,
  }
}