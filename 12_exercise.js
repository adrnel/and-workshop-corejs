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

module.exports = function filter(candidates, filters) {
  let availableImmediatelyFilter = filters.includes('AVAILABLE_IMMEDIATELY');
  let freshGradFilter = !availableImmediatelyFilter && filters.includes('FRESH_GRAD');

  return candidates.filter((candidate)=> {
    if(availableImmediatelyFilter) {
      return candidate.options.includes('AVAILABLE_IMMEDIATELY');
    }
    if (freshGradFilter) {
      return candidate.options.includes('FRESH_GRAD');
    }
    return filters.every(filter => candidate.options.includes(filter));
  })
};