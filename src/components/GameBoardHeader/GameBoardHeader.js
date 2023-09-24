import { useContext } from 'react';
import { GAME_STATE, GameContext, GAME_PHOTO_THEMES, GAME_DIFFICULTY_LEVELS } from '../GameBoard/GameStateManagment';
import { ResetButton } from '../ResetButton';
import { CARDS_SIZE_RANGE_GAP, MIN_CARDS_SIZE, MAX_CARDS_SIZE  } from '@/components/Card/fixture';

export function GameBoardHeader() {
  const {
    settings: {
      selectedPhotosTheme, setSelectedPhotosTheme,
      difficultyLevel, setDifficultyLevel,
      selectedcardSize, setSelectedCardSize,
    },
    gameDetails: { gameState },
    photosDetails: { fetchNewPhotos }
  } = useContext(GameContext);
  const disableTheSettings = gameState === GAME_STATE.START;
  
  return (
    <>
      <div className="flex justify-between items-center">
        <label>
          Photo Theme: {' '}
          <select
            disabled={disableTheSettings}
            className="text-amber-400 bg-transparent"
            value={selectedPhotosTheme}
            onChange={e => setSelectedPhotosTheme(e.target.value)}
          >
            {GAME_PHOTO_THEMES.map(photoTheme => (
              <option value={photoTheme.value} key={photoTheme.value}>{photoTheme.label}</option>
            ))}
          </select>
        </label>
        <label>
          Cards Size: {' '}
          <input
            disabled={disableTheSettings}
            type="range"
            className="range accent-amber-400"
            id="cardsSize"
            name="CardsSize"
            min={MIN_CARDS_SIZE}
            max={MAX_CARDS_SIZE} 
            value={selectedcardSize}
            step={CARDS_SIZE_RANGE_GAP}
            onChange={(e) => setSelectedCardSize(e.target.value)}
          />
        </label>
        <label>
          Level: {' '}
          <select
            disabled={disableTheSettings}
            className="text-amber-400 bg-transparent"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(Number(e.target.value))}
          >
            {GAME_DIFFICULTY_LEVELS.map(level => (
              <option value={level.value} key={level.value}>{level.label}</option>
            ))}
          </select>
        </label>
      </div>
      <ResetButton fetchNewPhotos={fetchNewPhotos} />
    </>
  )
}