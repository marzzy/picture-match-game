export function Loading() {
  return (
    <div className="text-center m-20 justify-center flex">
      <aside className="animate-spin h-6 w-6 mr-3 border-4 border-amber-600 border-t-amber-400 rounded-full" />
      <aside> Loading... </aside>
    </div>
  );
}