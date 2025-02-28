//Reduce : arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;

    for(let i = 0 ; i < this.length; i++){
        accumulator = accumulator ? cb(accumulator , this[i] , i , this) : this[i];
    }

    return accumulator;
}
const arr = [1,2,3,4];
//Legacy Code
const sum = arr.reduce((acc , curr) => {
    return acc + curr ;
} , 0)

console.log(sum);

//Polyfill
const result = arr.myReduce((acc,curr, i ,arr) => {
    return acc + curr ;
}, 0);
console.log(result);

