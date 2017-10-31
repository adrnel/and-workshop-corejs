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

  return candidates.filter((candidate)=> {
    if(availableImmediately) {
      return candidate.options.indexOf('AVAILABLE_IMMEDIATELY') > -1;
    } else if (freshGrad) {
      return candidate.options.indexOf('FRESH_GRAD') > -1;
    }
    return filters.every(filter => candidate.options.indexOf(filter) > -1);
  })
}

module.exports = filter;
