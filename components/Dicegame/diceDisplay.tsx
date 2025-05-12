
import React from 'react';

interface DiceDisplayProps {
  result: number | null;
  isRolling: boolean;
}

export default function DiceDisplay({ result, isRolling }: DiceDisplayProps) {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-36 h-36 bg-black/40 rounded-2xl flex items-center justify-center border-4 border-casino-purple/30 shadow-lg">
        {isRolling ? (
          <div className="animate-spin text-6xl font-bold text-casino-purple">?</div>
        ) : (
          <div className="text-6xl font-bold text-white">
            {result !== null ? result : '?'}
          </div>
        )}
      </div>
    </div>
  );
}
