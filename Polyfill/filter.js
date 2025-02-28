//Filter : Map returns those value which satisfy the condition of the call back. 

Array.prototype.myFilter = function(cb){
    let tempArr = [];
    for(let i = 0 ; i< this.length;i++){
        if(cb(this[i] , i , this)){
            tempArr.push(this[i]);
        }
    }
    return tempArr;
} 

const num = [1,2,3,4];
//Legacy Code
const result = num.filter((e) => {
    return e % 2 === 0;
})
console.log(result);

//Polyfill
const evenElem = num.myFilter((e) => {
    return e % 2 == 0; 
})
console.log(evenElem);
