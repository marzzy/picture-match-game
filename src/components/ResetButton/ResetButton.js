export function ResetButton({fetchNewPhotos}) {
  return (
    <button
      className="my-2 bg-amber-400 text-amber-800 p-2 rounded-sm border-y-4 border-transparent hover:bg-transparent hover:text-amber-100 hover:border-amber-500"
      onClick={fetchNewPhotos}
      type="reset"
    >
      Reset game
    </button>
  )
}