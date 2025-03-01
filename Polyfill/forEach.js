const arr = [1,2,3,4,5];
// legacy Code

arr.forEach((e) => {
    console.log(e);
})

// Polyfill
// Approach 1 :

function print(el ,i , arr){
    console.log(`Element in Index ${i} is ${arr[i]}`);
}

Array.prototype.myForEach = function (cb){
    for(let i = 0 ; i<this.length;i++){
        cb(this[i] ,i,this); //Call the callback with element, index, and array
    }
}

arr.myForEach(print);

// Approach 2 : Use Function.prototype.call() to bind this if you want to access the original array context.

function print( i , arr){
    console.log(`Index ${i} element is ${arr[i]}`);
}

Array.prototype.myForEach = function (cb){
    for(let i =0 ; i<this.length;i++){
        cb.call(this[i] , i , this);
    }
}

arr.myForEach(print);