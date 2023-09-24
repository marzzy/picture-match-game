export function getAndUpdateRecord(currentScore) {
  const lastSavedRecord = localStorage.getItem('record') || 0;
  if(lastSavedRecord < currentScore) {
    localStorage.setItem('record', currentScore);
    return currentScore;
  }
  return lastSavedRecord;
}

export function getIfThereIsANewRecord(score) {
  const lastSavedRecord = localStorage.getItem('record') || 0;
  return score >= lastSavedRecord ? score : undefined
}