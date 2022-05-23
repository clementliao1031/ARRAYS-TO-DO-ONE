function pushToFront(arr, val) {

    var temp1 = arr[0], temp2 = arr[1];
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val; 
}

 var myArr = [4, 8, 3, 7, 5];
 pushToFront(myArr, 2);
 console.log(myArr);

var myArr2 = [];
pushToFront(myArr2, 5);
console.log(myArr2);

var myArr3 = [10];
pushToFront(myArr3, -3);
console.log(myArr3);



function pushToFrontV2(arr, val) {

    for (var i = arr.length - 1; i >-0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; // Put value in at start of array
}

var arr1 = [4, 8, 3, 7, 5];
pushToFrontV2(arr1, 2);
console.log(arr1);

var arr2 = [10];
pushToFrontV2(arr2,2);
console.log(arr2);

var arr3 = [4,7];
pushToFrontV2(arr3,"CL");
console.log(arr3);

function popFront(arr) {
    var returnVal = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        // i = 1: arr[0] = arr[1] -> arr[i-1] = arr[i]
        arr[i-1] - arr[i];
    }
    arr.pop(); // Remove the last value
    return returnVal;
}

var test1 = [5, 7, 1, 4, 6];
var result1 =popFront (test1);
console.log(result1);


var test2 = [];
var result2 =popFront (test2);
console.log(result2);


var test3 = [10];
var result3 =popFront (test3);
console.log(result3);


var test4 = [7, -3];
var result4 =popFront (test4);
console.log(result4);


function insertAt(arr, val,ind) {

    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; //Put value in at specific index
}

var test1 = [4, 7, 8, 2, 5, 1];
insertAt(test1,3,4);
console.log(test1);

var test2 = [];
insertAt(test2,5,1);
console.log(test2);

var test3 = [11];
insertAt(test3,-3,1);
console.log(test3);