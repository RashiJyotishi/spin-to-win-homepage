
import React, { useState } from 'react';
import GameHeader from './gameHeader';
import BetControls from './betControls';
import GameControls from './gameControls';
import DiceDisplay from './diceDisplay';
import GameResults from './gameResults';
import GameHistory from './gameHistory';
import GameStats from './gameStats';
import PredictionStats from './predictionStats';

export default function DiceGame() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [prediction, setPrediction] = useState(50);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [gameHistory, setGameHistory] = useState<Array<{
    result: number;
    prediction: number;
    betAmount: number;
    payout: number;
    win: boolean;
  }>>([]);

  const handleRoll = () => {
    setIsRolling(true);
    
    // Simulate dice roll after a short delay
    setTimeout(() => {
      const diceResult = Math.floor(Math.random() * 100) + 1;
      const win = prediction >= 50 ? diceResult >= prediction : diceResult <= prediction;
      const payoutMultiplier = prediction >= 50 
        ? 100 / (101 - prediction) 
        : 100 / prediction;
      const payout = win ? betAmount * payoutMultiplier : 0;
      
      setResult(diceResult);
      setIsRolling(false);
      
      // Update balance
      setBalance(prev => win ? prev + payout - betAmount : prev - betAmount);
      
      // Add to history
      setGameHistory(prev => [{
        result: diceResult,
        prediction,
        betAmount,
        payout: win ? payout : 0,
        win
      }, ...prev.slice(0, 9)]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <GameHeader balance={balance} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 space-y-6">
          <div className="casino-card p-6">
            <DiceDisplay result={result} isRolling={isRolling} />
            
            <div className="mt-6">
              <BetControls 
                betAmount={betAmount} 
                setBetAmount={setBetAmount} 
                balance={balance} 
              />
            </div>
            
            <div className="mt-6">
              <PredictionStats prediction={prediction} />
              <GameControls 
                prediction={prediction} 
                setPrediction={setPrediction} 
                onRoll={handleRoll}
                isRolling={isRolling}
              />
            </div>
            
            {result !== null && (
              <div className="mt-6">
                <GameResults 
                  result={result}
                  prediction={prediction}
                  win={prediction >= 50 ? result >= prediction : result <= prediction}
                />
              </div>
            )}
          </div>
        </div>
        
        <div>
          <GameStats 
            gameHistory={gameHistory} 
            balance={balance}
          />
          <GameHistory gameHistory={gameHistory} />
        </div>
      </div>
    </div>
  );
}
