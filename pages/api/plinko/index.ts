
import type { NextApiRequest, NextApiResponse } from 'next';

type SimulationResult = {
  finalMultiplier: number;
  path: number[];
};

type Data = {
  results: SimulationResult[];
  stats: {
    totalBalls: number;
    averageMultiplier: number;
    maxMultiplier: number;
    minMultiplier: number;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { balls = 100, rows = 12, risk = 'medium' } = req.body;
    
    // Simple simulation logic
    const results: SimulationResult[] = [];
    let totalMultiplier = 0;
    let maxMultiplier = 0;
    let minMultiplier = Infinity;
    
    // Risk affects the possible multipliers
    const possibleMultipliers = {
      low: [1, 1.2, 1.5, 1.8, 2, 2.5, 3, 5],
      medium: [0.5, 1, 2, 3, 5, 10, 15, 25],
      high: [0.2, 0.5, 1, 2, 10, 25, 50, 100]
    };
    
    const multipliers = possibleMultipliers[risk as keyof typeof possibleMultipliers];
    
    for (let i = 0; i < balls; i++) {
      // Create a random path
      const path: number[] = [];
      for (let j = 0; j < rows; j++) {
        path.push(Math.random() > 0.5 ? 1 : 0);
      }
      
      // Simplified calculation to determine final position
      const leftCount = path.filter(p => p === 0).length;
      const rightCount = path.filter(p => p === 1).length;
      const multiplierIndex = Math.floor((leftCount / rows) * multipliers.length);
      const finalMultiplier = multipliers[multiplierIndex];
      
      totalMultiplier += finalMultiplier;
      maxMultiplier = Math.max(maxMultiplier, finalMultiplier);
      minMultiplier = Math.min(minMultiplier, finalMultiplier);
      
      results.push({
        finalMultiplier,
        path
      });
    }
    
    return res.status(200).json({
      results,
      stats: {
        totalBalls: balls,
        averageMultiplier: totalMultiplier / balls,
        maxMultiplier,
        minMultiplier
      }
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
