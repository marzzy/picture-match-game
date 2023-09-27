export function Loading() {
  return (
    <div className="w-full h-full z-10 absolute flex top-0 left-0 bg-black/75 justify-center items-center flex-col rounded-md">
      <aside className="animate-spin h-6 w-6 mr-3 border-4 border-amber-600 border-t-amber-400 rounded-full" />
      <aside> Loading... </aside>
    </div>
  );
}