
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-black/30 p-4 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-casino-purple">Plinko</h1>
        <div className="flex gap-4">
          <Link href="/plinko" className="text-white hover:text-casino-purple transition-colors">
            Game
          </Link>
          <Link href="/plinko/simulation" className="text-white hover:text-casino-purple transition-colors">
            Simulation
          </Link>
        </div>
      </div>
    </div>
  );
}
