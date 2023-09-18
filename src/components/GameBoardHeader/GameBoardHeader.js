
export function GameBoardHeader(props) {
  const { selectedPhotosTheme, photos, setSelectedPhotosTheme } = props;

  return (
    <div className='flex justify-evenly items-center'>
        {/* TODO: make it to request new set of images after reset */}
        <button
          className="my-2 bg-amber-400 text-amber-800 p-2 rounded-sm border-y-4 border-transparent hover:bg-transparent hover:text-amber-100 hover:border-amber-500"
          onClick={() => dispatchGameCardData({type: 'initNewGame', payload: photos})}
          type="reset"
        >
          Reset game
        </button>
        <label>
          Pick the Photo theme: {' '}
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