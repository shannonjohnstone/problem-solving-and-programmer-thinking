/**
 * Half a square
 * 
 * Using only 2 outputs "#" and "\n", print the following output
 * 
 * #####
 * ####
 * ###
 * ##
 * #
 * 
 * Notes
 * Using concepts such as breaking the problem down and solving problems we 
 * already know how to solve first, we can break this down into easier smaller problems
 * 
 * Those smaller problems being
 * - Print the half square using multiple outputs
 * - Print a single line of 5 hashes
 * - Print a 5 lines with single hashes
 * - Print a full square
 */

let hashPattern = "";
const rows = 5;

for (let row = 1; row <= rows; row++) {

  for (let hashIndex = rows; hashIndex >= row; hashIndex--) {
    hashPattern += "#";
  }

  hashPattern += "\n";
}

console.log(hashPattern)