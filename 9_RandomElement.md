### What is the Big O of the following algorithm? Explain your answer

  function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  ##### Answer:
    - Constant O(1). Takes just as long to determine a random value, regardless of how great or small the input