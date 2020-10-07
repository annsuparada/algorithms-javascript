// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

// For example, assume your bird sightings are of types . There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

// Function Description

// Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.

// migratoryBirds has the following parameter(s):

// arr: an array of integers representing types of birds sighted

function migratoryBirds(arr) {
  let store = {};
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    store[arr[i]] = store[arr[i]] + 1 || 1;
  }

  let tempValue = 0;
  for (let key in store) {
    if (store[key] > tempValue) {
      tempValue = store[key];
      answer = key;
    }
  }

  return answer;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); //4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); //3
