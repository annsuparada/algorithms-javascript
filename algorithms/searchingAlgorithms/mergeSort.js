function merge(arr1, arr2) {
    let results = []; 
    let i = 0;
    let j = 0;       
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j]);
            j++
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }

    return results;
};

// console.log(merge([1,3,5,7,9,11,13], [2,4,6,8,10,12,14,16,18]));


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

console.log(mergeSort([10,20,33,15,12,11,16,110]));