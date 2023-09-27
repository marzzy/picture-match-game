"use client";

import { GameBoard } from '@/components/GameBoard'
import { GameProvider } from '@/components/GameStateManagment'
import { PageHeader } from '@/components/PageHeader';

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 font-orbitron">
      <PageHeader title="Picture Match" />
      <section className="col-span-12 md:col-start-2 md:col-span-10">
        <GameProvider>
          <GameBoard />
        </GameProvider>
      </section>
    </main>
  )
}
