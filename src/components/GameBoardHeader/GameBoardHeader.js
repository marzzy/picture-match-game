import { ResetButton } from '../ResetButton';

export function GameBoardHeader(props) {
  const { selectedPhotosTheme, setSelectedPhotosTheme, fetchNewPhotos } = props;

  return (
    <div className='flex justify-evenly items-center'>
        <ResetButton fetchNewPhotos={fetchNewPhotos} />
        <label>
          Photo Theme: {' '}
          <select
            className="text-amber-400"
            value={selectedPhotosTheme}
            onChange={e => setSelectedPhotosTheme(e.target.value)}
          >
            <option value="cat">Cute Cat</option>
            <option value="dog">Lovely Dog</option>
            <option value="lofty giraffe">Lofty Giraffe</option>
          </select>
        </label>
      </div>
  )
}