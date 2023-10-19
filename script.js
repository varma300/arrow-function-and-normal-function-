/*Syntax:
Arrow functions have a shorter syntax compared to normal functions.*/

// Normal function

function func(e){
    console.log(e)
}

func(5);

//Arrow FUnction

const Func = (e) => {console.log(e);}

Func(6)

/*this Binding:
Arrow functions do not have their own this binding. Instead, they inherit the this value from their enclosing (parent) function or scope.
Normal functions have their own this binding, which is determined by how they are called.this Binding:
Arrow functions do not have their own this binding. Instead, they inherit the this value from their enclosing (parent) function or scope.
Normal functions have their own this binding, which is determined by how they are called.*/

//Normal Function:

const person = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, ${this.name}`); // 'this' refers to the 'person' object
    },
  };
  
  person.sayHello(); // Output: Hello, John

  
  //Arrow Function:

  const persons = {
    name: 'John',
    sayHello: () => {
      console.log(`Hello, ${this.name}`); // 'this' refers to the global scope, not 'person'
    },
  };
  
  person.sayHello(); // Output: Hello, undefined
  