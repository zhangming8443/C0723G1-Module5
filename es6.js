// 4. Arrow function

// ex1 tham so
const sum = (a,b) => {
    return a,b;
}
// =>
const sum2 = (a ,b) => a + b;

// ex2 object
const s = (a,b) => {
    return{
        a: a,
        b: b
    }
}
// => 
const s2 = (a,b) => ({a: a, b: b});

// ex3
const logger = (log) => console.log(log);

const course = {
    name: 'Hello world !',
    getName: function(){
        return this.name; //context
    }
};

console.log(course.getName());

// ex4

// 5. Classes

// 6. Default parameter values

// 7. Destructuring

// 8. Rest parameters

// 9. Spread

// 10. Enhanced object literals

// 11. Tagged tempplate literal

// 12. Modules



