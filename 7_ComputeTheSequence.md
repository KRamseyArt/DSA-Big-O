### What does the following algorithm do? What is its runtime complexity? Explain your answer

  function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

      if (i === 1) {
        result.push(0);
      }
      else if (i === 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  }

  ##### Answer:
    - The function returns an array of factorial values up to the given input index. A factorial of 5 would result in an array of [0, 1, 1, 2, 3].
    - Linear O(n). Time increases proportionately with size of input, while process takes the same regardless of index value.