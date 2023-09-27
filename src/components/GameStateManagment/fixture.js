export const GAME_STATE = {
  LOAD_CARDS: 'loadingCards',
  LOAD_IMAGES: 'loadingImages',
  START: 'startAndshowCards',
  PLAYING: 'isPlaying',
  FINISHED: 'Finished'
};

export const GAME_ACTIONS = {
  SET_CARDS: 'setNewBatchOfCards',
  START_GAME: 'startGame',
  START_PLAYING: 'startPlaying',
  RESET_PHOTOS: 'resetPhotos',
  UNCOMPLETE_MOVE: 'handleUncompleteMove',
  MATCHED_MOVE: 'matchedMove',
  UNMATCHED_MOVE: 'unmatchedMove',
  CLEAN_UNMATCHED_MOVE: 'cleanUnmatchedMove',
}

export const initGame =  {
  gameCards: [],
  gameState: GAME_STATE.LOAD_CARDS,
  playingCardsId: new Set([]),
  matchedCardsId: new Set([]),
  scoreData: {
    comboMoveCounter: 0,
    moveCounter: 0,
    score: 0,
  }
}

export const GAME_DIFFICULTY_LEVELS = [
  {
    label: 'easy',
    value: 4
  },
  {
    label: 'medium',
    value: 8
  },
  {
    label: 'hard',
    value: 16
  },
];

export const GAME_DEFAULT_DIFFICULTY_LEVEL = GAME_DIFFICULTY_LEVELS[0];

export const GAME_PHOTO_THEMES = [
  {
    label: 'Cute Cat',
    value: 'cat'
  },
  {
    label: 'Lovely Dog',
    value: 'dog'
  },
  {
    label: 'Lofty Giraffe',
    value: 'lofty giraffe'
  },
];

export const GAME_DEFAULT_PHOTO_THEME = GAME_PHOTO_THEMES[0];
