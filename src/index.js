/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let lengthArr = preferences.length;
  let count = 0;  
  for (let i = 0; i<lengthArr; i++) { 
      let first = preferences[i] - 1;
      if (first == i) continue;
      let second = preferences[first] - 1;
      if (first == second) continue;
      let third = preferences[second] - 1;
      if (third == second) continue;
      if (third == i) {
          count++;
      }
   }
   return count / 3;
};
