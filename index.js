// Return the factorial of the provided integer.

function factorialize(num) {
  let i = num
  let product = 1
  while (i > 0) {
    console.log(i)
    product *= i
    i--
  }
  return product;
}

// using recursion
function factorialize2(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

// using tail recursion
function factorialize3(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);