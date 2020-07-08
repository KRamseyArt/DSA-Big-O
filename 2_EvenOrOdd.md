### What is the Big O of the following algorithm? Explain your answer

  function isEven(value) {
      if (value % 2 === 0) {
          return true;
      }
      else
          return false;
      }
  }

  ##### Answer:
    - Constant O(1). Takes just as long to determine a true value from a false value, regardless of how great or small the input