const person = {
    name : "Yash Roy",
    age : 30,
    fullName : {
        firstName : "Yash",
        lastName : "Roy"
    },
    company : "XYZ",
    email : "abc@gmail.com",
    attendance : 25,
    greet : function() {
        return `Hello, my name is ${this.name}.`;
    }

}

console.log(person.company);
