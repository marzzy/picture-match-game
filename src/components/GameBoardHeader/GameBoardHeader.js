import { useGameActions, GAME_PHOTO_THEMES, GAME_DIFFICULTY_LEVELS, useGameStates } from '../GameStateManagment';
import { ResetButton } from '../ResetButton';
import { CARDS_SIZE_RANGE_GAP, MIN_CARDS_SIZE, MAX_CARDS_SIZE  } from '@/components/Card/fixture';

export function GameBoardHeader() {
  const {
    setSelectedPhotosTheme,
    setDifficultyLevel,
    setSelectedCardSize,
  } = useGameActions();
  const {
    settings: {
      selectedPhotosTheme,
      difficultyLevel,
      selectedcardSize,
    },
  } = useGameStates();
  
  return (
    <>
      <div className="flex justify-between items-center">
        <label>
          Photo Theme: {' '}
          <select
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
      <ResetButton />
    </>
  )
}