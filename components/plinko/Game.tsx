
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Game() {
  return (
    <div className="casino-card p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Plinko Game</h2>
      <div className="bg-black/40 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Plinko gameplay will be implemented here</p>
          <Button className="bg-casino-purple">Start Game</Button>
        </div>
      </div>
    </div>
  );
}
