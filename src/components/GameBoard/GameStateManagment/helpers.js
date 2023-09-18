export function getPlayingCards(cards) {
  return cards.filter(card => card.cardState === "playing");
}

export function getIsPlayingCardsMatch(cards) {
  const playingCards = getPlayingCards(cards);
  return playingCards.filter(card => card.imgId === playingCards[0].imgId).length === 2;
}

export function getPlayingCardsIds(cards) {
  return cards
    .filter(card => card.cardState === "playing")
    .map(card => card.id);
}

export function getIsTheGameFinished(cards) {
  const unmatchedCards = cards.filter(card => card.cardState === 'unmatched');
  return unmatchedCards.length === 0;
}