// returns array, sorted with bubble sort algorithm
function bubbleSort(arr) {
     for (let i = arr.length; i > 0; i--) {
         for (let j = 0; j < i; j++) {
             if (arr[j] > arr[j + 1]) {
                 let temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;
             }
         }
     }

     return arr;
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]));
console.log(bubbleSort([20, 20, 56, 1, 13, 12, 12]));