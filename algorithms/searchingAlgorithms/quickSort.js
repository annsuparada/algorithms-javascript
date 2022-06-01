function pivot(arr, start=0, end=arr.length) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start +1; i < end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        };
    };
    swap(arr, start, swapIdx);
    return swapIdx;
};

console.log(pivot([10,2,9,4,5,3,88,44])) //5
console.log(pivot([1,2,9,4,5,3,88,44])) //5

function quickSort(arr, left=0, right=arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        console.log('pivot index', pivotIndex)
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right)
    };
    return arr;
};

console.log(quickSort([4,6,9,1,2,5,3,7]))