function multiplyValue(value: number, multiplier?: number): number {
  const appliedMultiplier = multiplier !== undefined ? multiplier : 2;
  return value * appliedMultiplier;
}

export { multiplyValue };
