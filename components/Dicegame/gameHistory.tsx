
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HistoryItem {
  result: number;
  prediction: number;
  betAmount: number;
  payout: number;
  win: boolean;
}

interface GameHistoryProps {
  gameHistory: HistoryItem[];
}

export default function GameHistory({ gameHistory }: GameHistoryProps) {
  if (gameHistory.length === 0) {
    return null;
  }

  return (
    <div className="casino-card p-6 mt-6">
      <h3 className="text-lg font-medium text-white mb-4">Game History</h3>
      <ScrollArea className="h-[250px] pr-4">
        <div className="space-y-3">
          {gameHistory.map((item, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg ${item.win ? 'bg-green-900/20 border border-green-500/30' : 'bg-red-900/20 border border-red-500/30'}`}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-400 text-xs">Roll Result:</span>
                <span className="font-medium text-white">{item.result}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-400 text-xs">Prediction:</span>
                <span className="text-white">{item.prediction}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-400 text-xs">Bet Amount:</span>
                <span className="text-white">${item.betAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-xs">Payout:</span>
                <span className={item.win ? 'text-casino-green font-medium' : 'text-red-500'}>
                  {item.win ? `+$${item.payout.toFixed(2)}` : '-'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
