const sumArray = (items: number[]): number => {
  let sum = 0;
  items.forEach((item: number): number => (sum += item));
  return sum;
};
