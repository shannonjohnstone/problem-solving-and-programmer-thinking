/**
 * Find the mode
 * Find the most frequent value in an array
 */
const input = [4,7,3,8,7,3,9,9,3,3,10];

function findingTheMode(input) {
  let mostFrequentMode
  let alreadyCheckedModes = {};
  let currentlyHighestCount = 0;
  let currentCount = 0;

  for (let index = 0; index < input.length; index++) {
    const currentMode = input[index];
    currentCount = 0;
    
    for (let innerIndex = index; innerIndex < input.length; innerIndex++) {
      const currentInnerValue = input[innerIndex];
      
      // if first iteration but a count exists no need to re count
      if (alreadyCheckedModes[currentInnerValue]) break;

      // if a match increase count
      if (currentMode === currentInnerValue) {
        currentCount++;
      }

      // if the last iteration set flag so iterations can be skipped later
      if (innerIndex === input.length - 1) {
        alreadyCheckedModes[currentMode] = true;
      }
    }

    if (currentCount > currentlyHighestCount) {
      currentlyHighestCount = currentCount;
      mostFrequentMode = currentMode;
    }
  }

  return mostFrequentMode;
}

console.log(findingTheMode(input))