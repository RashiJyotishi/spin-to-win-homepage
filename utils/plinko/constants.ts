
// Plinko game constants

// Pin configuration
export const PIN_RADIUS = 5;
export const PIN_DISTANCE_HORIZONTAL = 40;
export const PIN_DISTANCE_VERTICAL = 40;
export const PIN_COLOR = '#8B5CF6';
export const PIN_GLOW_COLOR = 'rgba(139, 92, 246, 0.5)';

// Ball configuration
export const BALL_RADIUS = 8;
export const BALL_COLOR = '#F59E0B';
export const BALL_GLOW_COLOR = 'rgba(245, 158, 11, 0.5)';
export const GRAVITY = 0.5;
export const BOUNCE_FACTOR = 0.7;
export const HORIZONTAL_DAMPING = 0.95;

// Multiplier configurations based on risk level
export const MULTIPLIERS = {
  low: [1.2, 1.5, 2, 3, 5, 3, 2, 1.5, 1.2],
  medium: [0.5, 1, 2, 5, 10, 5, 2, 1, 0.5],
  high: [0.2, 0.5, 1, 3, 50, 3, 1, 0.5, 0.2]
};

// Game settings
export const DEFAULT_ROWS = 12;
export const DEFAULT_BET_AMOUNT = 10;
export const DEFAULT_RISK = 'medium';
export const MAX_BALLS = 10;
