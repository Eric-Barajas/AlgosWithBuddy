// 1. Print all the integers from 1 to 255. 

function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i)
    }
}
// print1To255()    

// 2. Print all odd integers from 1 to 255. 

function printOdds1To255() {
    for (let i = 1; i <= 255; i += 2) {
        console.log(i)
    }
}
// printOdds1To255() 

// 3. Print integers from 0 to 255, and with each integer print the sum so far.

function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        console.log(i);
        sum += i;
        console.log(sum)
    }
}
// printIntsAndSum0To255() 

// 4. Iterate through a given array, printing each value. 

function printArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// printArrayVals([1, 2, 3, 4, 5]) 

// 5. Given an array, find and print its largest element. 

function printMaxOfArray(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max)
}
// printMaxOfArray([1, 2, 3, 4, 5]) 

// 6. Analyze an array’s values and print the average

function printAverageOfArray(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    console.log(average / arr.length)
}
// printAverageOfArray([1, 2, 3, 4, 5]) 

// 7. Create an array with all the odd integers between 1 and 255 (inclusive).  

function returnOddsArray1To255() {
    let newArray = [];
    for (let i = 1; i <= 255; i += 2) {
        newArray.push(i);
    }
    console.log(newArray)
}
// returnOddsArray1To255()

// 8. Square each value in a given array, returning that same array with changed values. 

function squareArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i]
        console.log(arr[i])
    }
}
// squareArrayVals([1, 2, 3, 4, 5]) 

// 9. Given an array and a value Y, 
//count and print the number of array values greater than Y. 

function printArrayCountGreaterThanY(arr, y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
            // Below we are console logging the numbets that are greate...
            console.log(arr[i])
        }
    }
    // Below we are console logging the numbers that are greater than Y
    console.log(count)
}
// printArrayCountGreaterThanY([1, 2, 3, 4, 5], 4) 

// 10. Return the given array, after setting any negative values to zero. 

function zeroOutArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr)
    return arr;
}
// zeroOutArrayNegativeVals([-2, -4, 1, 2, 3, 4, 5]) 

// 11. Given an array, print the max, min and average values for that array.

function printMaxMinAverageArrayVals(arr) {
    let min = [0]
    let max = [0];
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        average += arr[i]
    }
    console.log(max, min, average / arr.length)
}
// printMaxMinAverageArrayVals([-1, 2, -3, 4, 5])

// 12. Given an array, move all values forward (to the left) by one index, 
// dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    // ITERATE THROUGH THE arr BUT STOP ONE LESS
    for (let i = 0; i < arr.length; i++) {
        // SHIFT VALUES TO THE LEFT (set value at i to equal to value at i+1)
        arr[i] = arr[i + 1]
    }
    // SET THE LAST VALUE TO 0 (using arr.length - 1, this gives us the last value in arr)
    arr[arr.length - 1] = 0;
    console.log(arr)
}
shiftArrayValsLeft([1, 2, 3, 4, 5])


// 13. Given an array of numbers, replace any negative values 
// with the string 'Dojo'

function swapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    console.log(arr)
}
swapStringForArrayNegativeVals([-1, 2, 3, 4, 5, -6])