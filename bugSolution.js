function foo(a, b) {
  if (b === 0) {
    if (a === 0) {
      return 0; // Handle case where both a and b are 0
    } else {
      return Infinity; // Handle case where b is 0 and a is not 0
    }
  } else {
    return a / b; // Normal calculation if b is not 0
  }
}