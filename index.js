//can we write a function that takes two sorted arrays and returns a sorted Array?

// so I see two steps to this problem, this first is concatenating our arrays and the second is sorting them. This should be an O(n) solution.

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArrays = arr1.concat(arr2);
  return mergedArrays.sort();
}
//returns [0,3,30, 31, 4, 4, 6] because .sort() sorts arrays as strings which is why we get this result.

//this time let's try a numeric sort using a compare function. This increases time complexity O(n^2) I think....
const mergeSortedArrays2 = (arr1, arr2) => {
  const mergedArrays = arr1.concat(arr2);
  return mergedArrays.sort((a, b) => a - b);
}
//returns our desired output but might struggle with big inputs. 

//Andrei's solution:
//I keep forgetting to check the function input....
//This solution is verbose to demonstrate how crazy it can get.
function mergeSortedArrays3(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
     if (!array2Item || array1Item < array2Item) {
       mergedArray.push(array1Item)
       array1Item = array1[i];
       i++;
     } else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
  }

  return mergedArray;
}



mergeSortedArrays2([0,3,4,31], [4, 6, 30]);
//output should be [ 0, 3, 4, 4, 6, 30, 31 ]