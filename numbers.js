/* Problem Name is &&& Second Smallest &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 *    execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement secondSmallest() correctly.
 * 4) If time permits, some possible follow-ups.
 */


/**
 * Returns the second smallest element in the array x.
 * Returns 0 if the array has fewer than 2 elements.
 */
// x = [1, 2, 3, 4]
// -> 2
function secondSmallest(x)
{
  // all: implement this function
  // x < y; x is smaller than y
  // /numbers smaller than
  var num =[1,2,3.14,4,5];
  var min = Math.min[num];
  var max = Math.max[num];
  var round = Math.round[num];
  var random = Math.random[num];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // var min Math.min.pply(null, arry.)
  
  return  console.log('the smallest value is' + min),
          console.log('the maximum value is' + max),
          console.log('the round value is' + round),
          console.log('the random value is' + random),
          console.log('the add value is' + num.reduce(reducer));
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */retuns
function doTestsPass()
{
  // todo: add more test cases
  var testArrays  = [[0], [0, 1]];
  var testResults = [0, 1];
  
  // Run through the tests and make assertions
  for(var i = 0; i < testArrays.length; i++)
  {
  if(secondSmallest(testArrays[i]) != testResults[i])
  {
    return false;
  }
  }
  return true;
}


/**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}
