### What is the Big O of the following algorithm? Explain your answer

  function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
  }

  ##### Answer:
    - Linear O(n). Time increases proportionately with size of input, while process takes the same regardless of index value.