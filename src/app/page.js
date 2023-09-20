"use client";

import { GameBoard } from '@/components/GameBoard' 

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <header className="relative col-span-12 text-6xl">
        <aside className='absolute bg-amber-300 min-h-[45px] w-full' />
        <h1 className='bg-transparent relative'>
          Picture Match
        </h1>
      </header>
      <section className="col-span-12 md:col-start-2 md:col-span-10">
        <GameBoard />
      </section>
    </main>
  )
}
