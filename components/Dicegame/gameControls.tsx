
import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface GameControlsProps {
  prediction: number;
  setPrediction: (value: number) => void;
  onRoll: () => void;
  isRolling: boolean;
}

export default function GameControls({ 
  prediction, 
  setPrediction, 
  onRoll,
  isRolling
}: GameControlsProps) {
  
  const handleSliderChange = (value: number[]) => {
    setPrediction(value[0]);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Prediction: {prediction}</span>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setPrediction(1)}
              className="h-8 px-2 text-xs"
            >
              Min
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setPrediction(50)}
              className="h-8 px-2 text-xs"
            >
              50
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setPrediction(99)}
              className="h-8 px-2 text-xs"
            >
              Max
            </Button>
          </div>
        </div>
        
        <Slider 
          value={[prediction]} 
          min={1} 
          max={99} 
          step={1} 
          onValueChange={handleSliderChange}
          className="py-4"
        />
        
        <div className="flex justify-between text-xs text-gray-500">
          <span>1</span>
          <span>50</span>
          <span>99</span>
        </div>
      </div>
      
      <Button 
        onClick={onRoll} 
        disabled={isRolling}
        className="w-full h-12 text-lg font-medium bg-casino-purple hover:bg-casino-purple/90"
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </Button>
    </div>
  );
}
