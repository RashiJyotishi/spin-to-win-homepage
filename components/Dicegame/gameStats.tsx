
import React from 'react';

interface HistoryItem {
  result: number;
  prediction: number;
  betAmount: number;
  payout: number;
  win: boolean;
}

interface GameStatsProps {
  gameHistory: HistoryItem[];
  balance: number;
}

export default function GameStats({ gameHistory, balance }: GameStatsProps) {
  const totalBets = gameHistory.length;
  const totalWins = gameHistory.filter(item => item.win).length;
  const totalWagered = gameHistory.reduce((sum, item) => sum + item.betAmount, 0);
  const totalPayout = gameHistory.reduce((sum, item) => sum + item.payout, 0);
  const netProfit = totalPayout - totalWagered;
  const winRate = totalBets > 0 ? (totalWins / totalBets) * 100 : 0;

  return (
    <div className="casino-card p-6">
      <h3 className="text-lg font-medium text-white mb-4">Stats</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-400">Total Bets:</span>
          <span className="font-medium text-white">{totalBets}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Win Rate:</span>
          <span className="font-medium text-white">{winRate.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Total Wagered:</span>
          <span className="font-medium text-white">${totalWagered.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Total Payout:</span>
          <span className="font-medium text-casino-green">${totalPayout.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Net Profit:</span>
          <span className={`font-medium ${netProfit >= 0 ? 'text-casino-green' : 'text-red-500'}`}>
            {netProfit >= 0 ? '+' : ''}{netProfit.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
