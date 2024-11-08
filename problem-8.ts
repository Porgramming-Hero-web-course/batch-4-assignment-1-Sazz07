const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
  return keys.every((key: keyof T) => key in obj);
};
