let car = {
    color : "Red",
    company : "Harrier"
}

function purchaseCar(currency , price){
    console.log(
        `I have purchased this ${this.color} color ${this.company} for ${currency}${price}`
    );
    
}
//Legacy Code
purchaseCar.apply(car,["₹",2000000]);
//Polyfill
Function.prototype.myCall = function (context = {}, args){
    if (typeof this !== 'function') {
        throw new Error(this + "It's not callable");
    }

    if(!Array.isArray){
        throw new Error(this + "It's not also callable");
    }
    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car,["₹",2000000])