
// You should implement your task here.

module.exports = function towelSort (matrix) {
let result = [];
  if (matrix === [] || !matrix) return result;

  for (let i = 0; i < matrix.length; i++) {
    (i % 2) ? matrix[i].reverse() : matrix[i]
      matrix[i].forEach(function(elem) {
      result.push(elem);
    })
  }
  
  return result;
}
