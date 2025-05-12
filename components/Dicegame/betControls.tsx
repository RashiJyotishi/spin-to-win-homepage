
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface BetControlsProps {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  balance: number;
}

export default function BetControls({ betAmount, setBetAmount, balance }: BetControlsProps) {
  const handleQuickSelect = (amount: number) => {
    const newAmount = Math.min(amount, balance);
    setBetAmount(newAmount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) return;
    setBetAmount(Math.min(value, balance));
  };

  return (
    <div>
      <Label htmlFor="bet-amount">Bet Amount</Label>
      <div className="flex items-center gap-2 mt-2">
        <Input 
          id="bet-amount"
          type="number"
          value={betAmount}
          onChange={handleInputChange}
          className="text-lg font-medium"
        />
        
        <div className="flex gap-2">
          <Button onClick={() => handleQuickSelect(betAmount / 2)} variant="outline" size="sm">
            ½
          </Button>
          <Button onClick={() => handleQuickSelect(betAmount * 2)} variant="outline" size="sm">
            2×
          </Button>
          <Button onClick={() => handleQuickSelect(balance)} variant="outline" size="sm">
            Max
          </Button>
        </div>
      </div>
    </div>
  );
}
