//Map : Map returns each and every value and modify the original array without affecting original array according to the condition of the call back. 

//Signature : Array.map((num,i,arr) = > {})
Array.prototype.myMap = function(cb){
    let tempArr = [];
    for (let i= 0;i < this.length;i++) {
        tempArr.push(cb(this[i],i));
    }
    return tempArr;
}

const nums = [1,2,3,4];

//This is the legacy code
const result = nums.map((e) => e *3);
console.log(result);

//This is Polyfill of Map
const trippledArray = nums.myMap((num) => {
    return num * 3;
});
console.log(trippledArray);
