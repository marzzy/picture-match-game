"use client";

import { GameBoard } from '@/components/GameBoard' 

export default function Home() {
  return (
    <main className="grid grid-cols-6 gap-4">
      <header className="relative col-span-6 text-6xl bg-amber-300 min-h-[50px]">
        <h1 className='absolute bg-transparent'>
          Picture Match
        </h1>
      </header>
      <section className="col-span-6">
        <GameBoard />
      </section>
    </main>
  )
}
