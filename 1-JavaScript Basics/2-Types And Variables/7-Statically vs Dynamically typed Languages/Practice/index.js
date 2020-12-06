let myVariable;

console.log(myVariable); // undefined

myVariable = 10;

console.log(myVariable); // 10

myVariable = true;

console.log(myVariable); // true

myVariable = {
    x: true,
    y: 10
};

console.log(myVariable); // {...}

myVariable.y = 20;

console.log(myVariable); // {...}

myVariable = null;

// Hata Alırız !!! myVariable.x = false;

