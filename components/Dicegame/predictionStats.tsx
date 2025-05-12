
import React, { useMemo } from 'react';

interface PredictionStatsProps {
  prediction: number;
}

export default function PredictionStats({ prediction }: PredictionStatsProps) {
  const stats = useMemo(() => {
    const isOver = prediction >= 50;
    const winChance = isOver ? 101 - prediction : prediction;
    const multiplier = (100 / winChance) * 0.97; // 3% house edge
    
    return {
      type: isOver ? 'Over' : 'Under',
      winChance: winChance,
      multiplier: multiplier
    };
  }, [prediction]);

  return (
    <div className="flex justify-between mb-2 text-sm">
      <div>
        <span className="text-gray-400 mr-1">Type:</span>
        <span className="text-white font-medium">
          {stats.type} {prediction}
        </span>
      </div>
      <div>
        <span className="text-gray-400 mr-1">Win Chance:</span>
        <span className="text-casino-green font-medium">{stats.winChance}%</span>
      </div>
      <div>
        <span className="text-gray-400 mr-1">Multiplier:</span>
        <span className="text-casino-gold font-medium">{stats.multiplier.toFixed(2)}x</span>
      </div>
    </div>
  );
}
