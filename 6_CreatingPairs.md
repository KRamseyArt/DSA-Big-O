### What is the Big O of the following algorithm? Explain your answer

  function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        console.log(arr[i] + ", " +  arr[j] );
      }
    }
  }

  ##### Answer:
    - Polynomial O(n^2). Iterating over nested loops raise the run time by a power of 2.