
import { MULTIPLIERS } from './constants';

type RiskLevel = 'low' | 'medium' | 'high';

export interface SimulationResult {
  multiplier: number;
  path: number[];
  betAmount: number;
  payout: number;
}

// Calculate potential payout based on risk level and bet amount
export function calculatePayout(
  betAmount: number, 
  multiplier: number
): number {
  return betAmount * multiplier;
}

// Determine the multiplier based on the slot the ball lands in
export function getMultiplierForSlot(
  slotIndex: number, 
  riskLevel: RiskLevel = 'medium'
): number {
  const multipliers = MULTIPLIERS[riskLevel];
  return multipliers[slotIndex] || 0;
}

// Calculate statistics for a set of simulation results
export function calculateStatistics(results: SimulationResult[]) {
  if (results.length === 0) {
    return {
      totalBets: 0,
      totalPayout: 0,
      averageMultiplier: 0,
      maxMultiplier: 0,
      minMultiplier: 0,
      profitLoss: 0,
      roi: 0
    };
  }
  
  const totalBets = results.length;
  const totalBetAmount = results.reduce((sum, result) => sum + result.betAmount, 0);
  const totalPayout = results.reduce((sum, result) => sum + result.payout, 0);
  const multipliers = results.map(result => result.multiplier);
  
  const averageMultiplier = multipliers.reduce((sum, m) => sum + m, 0) / totalBets;
  const maxMultiplier = Math.max(...multipliers);
  const minMultiplier = Math.min(...multipliers);
  const profitLoss = totalPayout - totalBetAmount;
  const roi = (profitLoss / totalBetAmount) * 100;
  
  return {
    totalBets,
    totalPayout,
    averageMultiplier,
    maxMultiplier,
    minMultiplier,
    profitLoss,
    roi
  };
}
