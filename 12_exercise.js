/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *   
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 * 
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 * 
 * 
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *  
 *   happy refactory :)
 */

function filter(candidates, filters) {
  const result = [];
  let availableImmediately = filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1;
  let freshGrad = filters.indexOf('FRESH_GRAD') !== -1 && !availableImmediately;

  if (filters.length === 0) return candidates;

  for (let i = candidates.length; i--; ) {
    let hasOptions = candidates[i].options && candidates[i].options.length > 0; //has.options

    if (candidates[i].options) {
      for (let k = filters.length; k--; ) {
        // loop through filters
        let hasFilter = false;
        for (let j = candidates[i].options.length; j--; ) {
          if (!availableImmediately && !freshGrad) {
            if (filters[k].indexOf(candidates[i].options[j]) !== -1) {
              hasFilter = true;
            }
          } else if (
            availableImmediately &&
            candidates[i].options[j] === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (freshGrad && candidates[i].options[j] === 'FRESH_GRAD') {
            hasFilter = true;
          }
        }
        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      result.unshift(candidates[i]);
    }
  }
  return result;
}

module.exports = filter;
