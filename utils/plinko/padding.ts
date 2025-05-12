
// Helper functions for calculating padding and layout

/**
 * Calculates the required canvas dimensions based on game parameters
 */
export function calculateCanvasDimensions(
  rows: number,
  pinDistanceHorizontal: number,
  pinDistanceVertical: number,
  padding: number
) {
  // Width is determined by the number of slots, which is rows + 1
  const width = (rows + 1) * pinDistanceHorizontal + padding * 2;
  
  // Height is determined by the number of rows plus space for slots
  const height = rows * pinDistanceVertical + padding * 3;
  
  return { width, height };
}

/**
 * Calculates the drop zone position (where balls are initially placed)
 */
export function calculateDropPosition(
  canvasWidth: number,
  padding: number
) {
  return {
    x: canvasWidth / 2,
    y: padding
  };
}

/**
 * Calculates positions for multiplier labels at the bottom
 */
export function calculateMultiplierPositions(
  canvasWidth: number,
  numSlots: number,
  bottomPadding: number,
  canvasHeight: number
) {
  const slotWidth = canvasWidth / numSlots;
  const positions = [];
  
  for (let i = 0; i < numSlots; i++) {
    positions.push({
      x: slotWidth * i + slotWidth / 2,
      y: canvasHeight - bottomPadding / 2
    });
  }
  
  return positions;
}

/**
 * Calculates boundaries for the slots at the bottom
 */
export function calculateSlotBoundaries(
  canvasWidth: number,
  numSlots: number,
  canvasHeight: number,
  bottomPadding: number
) {
  const slotWidth = canvasWidth / numSlots;
  const boundaries = [];
  
  for (let i = 0; i < numSlots; i++) {
    boundaries.push({
      x1: i * slotWidth,
      x2: (i + 1) * slotWidth,
      y: canvasHeight - bottomPadding
    });
  }
  
  return boundaries;
}
