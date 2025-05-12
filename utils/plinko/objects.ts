
import { PIN_RADIUS, BALL_RADIUS } from './constants';

// Basic types
export interface Point {
  x: number;
  y: number;
}

export interface Vector {
  x: number;
  y: number;
}

export interface Pin {
  position: Point;
  radius: number;
  row: number;
  col: number;
}

export interface BallState {
  position: Point;
  velocity: Vector;
  radius: number;
  active: boolean;
  path: number[];
}

// Function to generate pins layout based on number of rows
export function generatePins(rows: number, pinDistance: number): Pin[] {
  const pins: Pin[] = [];
  
  for (let row = 0; row < rows; row++) {
    const numPinsInRow = row + 1;
    const rowOffset = (pinDistance * (rows - numPinsInRow)) / 2;
    
    for (let col = 0; col < numPinsInRow; col++) {
      pins.push({
        position: {
          x: rowOffset + col * pinDistance,
          y: row * pinDistance
        },
        radius: PIN_RADIUS,
        row,
        col
      });
    }
  }
  
  return pins;
}

// Function to check collision between ball and pin
export function checkCollision(ball: BallState, pin: Pin): boolean {
  const dx = ball.position.x - pin.position.x;
  const dy = ball.position.y - pin.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  return distance < ball.radius + pin.radius;
}

// Function to handle collision response
export function handleCollision(ball: BallState, pin: Pin): void {
  // Vector from pin to ball
  const dx = ball.position.x - pin.position.x;
  const dy = ball.position.y - pin.position.y;
  
  // Normalize
  const length = Math.sqrt(dx * dx + dy * dy);
  const normalizedDx = dx / length;
  const normalizedDy = dy / length;
  
  // Move the ball outside of the pin (no overlap)
  const minDistance = ball.radius + pin.radius;
  ball.position.x = pin.position.x + normalizedDx * minDistance;
  ball.position.y = pin.position.y + normalizedDy * minDistance;
  
  // Reflect velocity (with some randomness for realism)
  const dotProduct = ball.velocity.x * normalizedDx + ball.velocity.y * normalizedDy;
  
  ball.velocity.x -= 2 * dotProduct * normalizedDx;
  ball.velocity.y -= 2 * dotProduct * normalizedDy;
  
  // Add slight randomness to make the game less predictable
  ball.velocity.x += (Math.random() - 0.5) * 0.5;
  
  // Record the path (left or right)
  if (dx > 0) {
    ball.path.push(1); // Right
  } else {
    ball.path.push(0); // Left
  }
}

// Function to determine the slot the ball ends up in
export function determineSlot(ball: BallState, numSlots: number, canvasWidth: number): number {
  const slotWidth = canvasWidth / numSlots;
  const slotIndex = Math.floor(ball.position.x / slotWidth);
  return Math.max(0, Math.min(numSlots - 1, slotIndex));
}
