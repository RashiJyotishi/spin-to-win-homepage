
import React from 'react';

interface GameHeaderProps {
  balance: number;
}

export default function GameHeader({ balance }: GameHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Dice Game</h1>
      <p className="text-gray-400">Predict the dice roll outcome and win big rewards!</p>
      <div className="mt-4 p-3 bg-black/20 rounded-lg inline-flex items-center">
        <span className="text-gray-400 mr-2">Balance:</span>
        <span className="text-2xl font-bold text-casino-gold">${balance.toFixed(2)}</span>
      </div>
    </div>
  );
}
