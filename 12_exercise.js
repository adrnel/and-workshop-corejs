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

  // Looping through Candidates
  for (let i = candidates.length; i--; ) {
    let hasOptions = candidates[i].options && candidates[i].options.length > 0; //has.options

    if (candidates[i].options) {

      // loop through filters
      for (let k = filters.length; k--; ) {
        let hasFilter = false;

        if(availableImmediately) {
            hasFilter = candidates[i].options.indexOf('AVAILABLE_IMMEDIATELY') > -1;
        } else if (freshGrad) {
          hasFilter = candidates[i].options.indexOf('FRESH_GRAD') > -1;
        } else {
          hasFilter = candidates[i].options.indexOf(filters[k]) > -1;
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
