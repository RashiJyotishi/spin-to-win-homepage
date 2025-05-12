
import React from 'react';

interface GameResultsProps {
  result: number;
  prediction: number;
  win: boolean;
}

export default function GameResults({ result, prediction, win }: GameResultsProps) {
  const resultText = win 
    ? `You won! Roll: ${result}, Prediction: ${prediction >= 50 ? `≥ ${prediction}` : `≤ ${prediction}`}`
    : `You lost! Roll: ${result}, Prediction: ${prediction >= 50 ? `≥ ${prediction}` : `≤ ${prediction}`}`;

  return (
    <div className={`p-4 rounded-lg ${win ? 'bg-green-900/20 border border-green-500/30' : 'bg-red-900/20 border border-red-500/30'}`}>
      <div className="text-center">
        <span className={`text-xl font-medium ${win ? 'text-casino-green' : 'text-red-500'}`}>
          {resultText}
        </span>
      </div>
    </div>
  );
}
