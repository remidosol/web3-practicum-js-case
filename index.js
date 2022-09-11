const oddishOrEvenish = (num) => {
  return num.toString().split('').reduce((prev, curr) => {
    return +prev + +curr;
  }) % 2 === 0 ? 'Even' : 'Odd';
};


console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
