const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let sumCats = 0;
  for (let i=0; i < matrix.length; i++)
    for (let j=0; j < matrix[i].length; j++)
      if (matrix[i][j] === '^^') {
        sumCats += 1;
      }
      return sumCats;
  
}
console.log(countCats([['^^', 1, '^^'],[0, '^^', 2],['^^', 1, 2],]));
// console.log(countCats([[3, 1, 2],[0, 2, 2],[2, 1, 2],]));

module.exports = {
  countCats
};
