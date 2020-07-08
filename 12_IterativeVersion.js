// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// 1) Counting Sheep
const countSheep = num => {
  for (let i = num; i >= 0; i--){
		if (i === 0){
			return `All the sheep jumped over the fence`
			
		}
		console.log(`${i}: Another sheep jumps over the fence`)
	}
}

console.log(countSheep(3));

// 2) Power Calculator
const powerCalculator = (base, exp) => {
  if (exp < 0){
    throw new Error('Exponent must be >= 0')
  }
  return base ** exp;
}

console.log(powerCalculator(10, 2));

// 3) Reverse String
const reverseString = string => {
  let newString = '';
  for (let i = 1; i <= string.length; i++){
    newString += string[string.length-i];
  }
  return newString;
}

console.log(reverseString('Testing123!'));

//4) nth Triangular Number
const nthTriangularNum = num => {
  let result = 0;
  for (let i = 0; i < num; i++){
    result++;
  }

  return result;
}

console.log(nthTriangularNum(5));

// 5) String Splitter
const stringSplitter = (string, div) => {
  let output = [];
  let previous = -1;
  for (let i = 0; i < string.length; i++){
    if (string[i] === div){
      output.push(string.slice(previous + 1, i));
      previous = i;
    }
    if(i === string.length-1 && string[i] !== div){
      output.push(string.slice(previous + 1, i + 1))
    }
  }
  return output;
}

console.log(stringSplitter("02/20/2020", "/"))

// 6) Fibonacci
const fibonacci = num => {
  let sequence = [1, 1];

  for (let i = 2; i < num; i++){
    sequence.push(sequence[i-2] + sequence[i-1])
  }

  return sequence;
}

console.log(fibonacci(7));

// 7) Factorial
const factorial = num => {
  let factorial = 1;

  for (let i = 0; i < num; i++){
    factorial *= num - i
  }

  return factorial;
}

console.log(factorial(5))