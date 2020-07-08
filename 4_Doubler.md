### What is the Big O of the following algorithm? Explain your answer

  function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
    }
    return array;
  }

  ##### Answer:
    - Linear O(n). Time increases proportionately with size of input, while process takes the same regardless of index value.