
import { BallState, Pin, checkCollision, handleCollision } from '../objects';
import { GRAVITY, BOUNCE_FACTOR, HORIZONTAL_DAMPING } from '../constants';

export class Ball {
  state: BallState;
  
  constructor(x: number, y: number, radius: number) {
    this.state = {
      position: { x, y },
      velocity: { x: 0, y: 0 },
      radius,
      active: true,
      path: []
    };
  }
  
  update(pins: Pin[], canvasWidth: number, canvasHeight: number): void {
    if (!this.state.active) return;
    
    // Apply gravity
    this.state.velocity.y += GRAVITY;
    
    // Apply horizontal damping
    this.state.velocity.x *= HORIZONTAL_DAMPING;
    
    // Update position based on velocity
    this.state.position.x += this.state.velocity.x;
    this.state.position.y += this.state.velocity.y;
    
    // Check for collisions with pins
    for (const pin of pins) {
      if (checkCollision(this.state, pin)) {
        handleCollision(this.state, pin);
      }
    }
    
    // Check for wall collisions
    if (this.state.position.x - this.state.radius < 0) {
      this.state.position.x = this.state.radius;
      this.state.velocity.x = -this.state.velocity.x * BOUNCE_FACTOR;
    } else if (this.state.position.x + this.state.radius > canvasWidth) {
      this.state.position.x = canvasWidth - this.state.radius;
      this.state.velocity.x = -this.state.velocity.x * BOUNCE_FACTOR;
    }
    
    // Check for bottom collision (ball reaches the end)
    if (this.state.position.y + this.state.radius > canvasHeight) {
      this.state.position.y = canvasHeight - this.state.radius;
      this.state.velocity.y = 0;
      this.state.velocity.x = 0;
      this.state.active = false;
    }
  }
  
  reset(x: number, y: number): void {
    this.state.position.x = x;
    this.state.position.y = y;
    this.state.velocity.x = 0;
    this.state.velocity.y = 0;
    this.state.active = true;
    this.state.path = [];
  }
  
  addInitialVelocity(): void {
    // Add slight randomness to initial velocity
    this.state.velocity.x = (Math.random() - 0.5) * 2;
    this.state.velocity.y = 1;
  }
  
  isActive(): boolean {
    return this.state.active;
  }
  
  getPath(): number[] {
    return this.state.path;
  }
}
