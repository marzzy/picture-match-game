import { getRandomInt, getRandomUniqueNum } from '@/utils';

function initNewGameCards(photosDetails){
  const photosIdsList = photosDetails.map(photoDetails => photoDetails.id);
  const gameCardsImagesIDsList = [...photosIdsList, ...photosIdsList]; // we will show each image 2 times
  const gameCardsData = [];

  for(let i =0; i < photosDetails.length*2 ;i++) {
    let indexOfSelectedPhotoId = getRandomInt(gameCardsImagesIDsList.length); // randomly select one avilable id from gameCardsImagesIDsList
    let selectedPhotoId =gameCardsImagesIDsList[indexOfSelectedPhotoId];
    gameCardsData.push({
      id: getRandomUniqueNum(),
      imgId: selectedPhotoId,
      cardState: 'unmatched', // playing , matched, unmatched
    });
    gameCardsImagesIDsList.splice(indexOfSelectedPhotoId, 1); // remove the id of selected photo from the gameCardsImagesIDsList not to selected more than 1
  }

  return gameCardsData;
}

function handleFlipCard(gameCardsState, selectedCardId){
  return gameCardsState.map(card => {
    if(card.id === selectedCardId) {
      return {
        ...card,
        cardState: 'playing'
      }
    }
    return card
  });
}

function handlePlayingCards(gameCardsState, isMatched) {
  return gameCardsState.map(card => {
    if(card.cardState === 'playing') {
      return {
        ...card,
        cardState: isMatched ? 'matched' : 'unmatched'
      }
    }
    return card;
  })
}

export function gameCardDataReducer(gameCardsState, gameCardsAction) {
  switch (gameCardsAction.type) {
    case 'initNewGame': {
      return initNewGameCards(gameCardsAction.payload)
    }
    case 'flipCard': {
      return handleFlipCard(gameCardsState, gameCardsAction.payload)
    }
    case 'handleSelectMatches': {
      return handlePlayingCards(gameCardsState, true)
    }
    case 'handleSelectUnmatched': {
      return handlePlayingCards(gameCardsState, false)
    }
    default: {
      return gameCardsState
    }
  }
}