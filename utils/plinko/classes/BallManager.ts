
import { Ball } from './Ball';
import { Pin, determineSlot } from '../objects';
import { BALL_RADIUS } from '../constants';

export class BallManager {
  balls: Ball[];
  activeIndex: number;
  maxBalls: number;
  dropPosition: { x: number, y: number };
  
  constructor(maxBalls: number, dropX: number, dropY: number) {
    this.balls = [];
    this.maxBalls = maxBalls;
    this.activeIndex = -1;
    this.dropPosition = { x: dropX, y: dropY };
    
    // Create all balls at the start
    for (let i = 0; i < maxBalls; i++) {
      this.balls.push(new Ball(dropX, dropY, BALL_RADIUS));
    }
  }
  
  dropBall(): boolean {
    // If we've used all balls, return false
    if (this.activeIndex >= this.maxBalls - 1) {
      return false;
    }
    
    // Move to next ball
    this.activeIndex++;
    
    // Reset and activate it
    this.balls[this.activeIndex].reset(this.dropPosition.x, this.dropPosition.y);
    this.balls[this.activeIndex].addInitialVelocity();
    
    return true;
  }
  
  update(pins: Pin[], canvasWidth: number, canvasHeight: number): void {
    // Only update active balls
    for (let i = 0; i <= this.activeIndex; i++) {
      if (this.balls[i].isActive()) {
        this.balls[i].update(pins, canvasWidth, canvasHeight);
      }
    }
  }
  
  allBallsDropped(): boolean {
    return this.activeIndex >= 0 && this.activeIndex >= this.maxBalls - 1;
  }
  
  allBallsSettled(): boolean {
    if (this.activeIndex < 0) return true;
    
    // Check if all dropped balls are inactive
    for (let i = 0; i <= this.activeIndex; i++) {
      if (this.balls[i].isActive()) {
        return false;
      }
    }
    return true;
  }
  
  getFinalSlots(numSlots: number, canvasWidth: number): number[] {
    const slots: number[] = [];
    
    for (let i = 0; i <= this.activeIndex; i++) {
      if (!this.balls[i].isActive()) {
        const slotIndex = determineSlot(this.balls[i].state, numSlots, canvasWidth);
        slots.push(slotIndex);
      }
    }
    
    return slots;
  }
  
  getPaths(): number[][] {
    const paths: number[][] = [];
    
    for (let i = 0; i <= this.activeIndex; i++) {
      paths.push(this.balls[i].getPath());
    }
    
    return paths;
  }
  
  reset(): void {
    this.activeIndex = -1;
  }
}
