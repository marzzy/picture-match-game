export function PageHeader({title}) {
  return (
    <header className="relative col-span-12 text-6xl">
      <aside className='absolute bg-amber-300 min-h-[80%] w-full' />
      <h1 className='bg-transparent relative'>
        {title}
      </h1>
    </header>
  );
}
