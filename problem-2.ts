const removeDuplicates = (items: number[]): number[] => {
  const uniqueItem: Set<number> = new Set(items);
  return [...uniqueItem];
};
