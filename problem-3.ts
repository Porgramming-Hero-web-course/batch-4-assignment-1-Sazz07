const countWordOccurrences = (sentence: string, checkWord: string) => {
  let counter = 0;
  sentence
    .toLowerCase()
    .split(" ")
    .map((item: string) => {
      if (item === checkWord.toLowerCase()) {
        counter++;
      }
    });
  return counter;
};
