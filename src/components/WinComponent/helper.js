import { getRandomInt } from "@/utils";
import { recordBeatingPhrases, winPhrases } from "./fixtures";

export function getRandomWinPhrase(hasNewRecord) {
  if(hasNewRecord) {
    return '🥇' + recordBeatingPhrases[getRandomInt(recordBeatingPhrases.length)] + '🥇';
  }
  return '🥳' + winPhrases[getRandomInt(winPhrases.length)] + '🎉';
}
