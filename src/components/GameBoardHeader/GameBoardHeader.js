import { ResetButton } from '../ResetButton';
import { CARDS_SIZE_RANGE_GAP, MIN_CARDS_SIZE, MAX_CARDS_SIZE  } from '@/components/Card/fixture';

export function GameBoardHeader(props) {
  const { selectedPhotosTheme, setSelectedPhotosTheme, fetchNewPhotos, cardsSize, setCardsSize } = props;

  return (
    <div className='flex justify-evenly items-center'>
        <ResetButton fetchNewPhotos={fetchNewPhotos} />
        <label>
          Photo Theme: {' '}
          <select
            className="text-amber-400 bg-transparent"
            value={selectedPhotosTheme}
            onChange={e => setSelectedPhotosTheme(e.target.value)}
          >
            <option value="cat">Cute Cat</option>
            <option value="dog">Lovely Dog</option>
            <option value="lofty giraffe">Lofty Giraffe</option>
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
            value={cardsSize}
            step={CARDS_SIZE_RANGE_GAP}
            onChange={(e) => setCardsSize(e.target.value)}
          />
        </label>
      </div>
  )
}