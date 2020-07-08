### What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

  function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
      return false;
    }
    for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
    }
    return true;
  }

  ##### Answer:
    - This function determines if a given input is a prime number or not (meaning it cannot be divided by any number other than itself).
    - Linear O(n). Time increases proportionately with size of input, as iteration takes place up to the size of the 