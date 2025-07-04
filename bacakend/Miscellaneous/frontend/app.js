// // function PersonMaker(name, age) {
// //     const person = {
// //         name: name,
// //         age: age,
// //         talk(){
// //             console.log(`Hi my name is ${this.name}`);
// //         },
// //     };
// //     return person;
// // }

// //constructors 
// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// //     console.log(this)
// //     }

// //     Person.prototype.talk = function() {
// //         console.log(`Hi my name is ${this.name}`);
// //     };

//   class Person {
//     constructor(name, age) {
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }
   
// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age); // ✅ super must come first
//         this.marks = marks;
//     }
// }
    
// class Teacher extends Person{
//     constructor(name,age,subject) {
//         super(name,age);
//          this.subject = subject ;  
//         }
//     }
    

class Mammal {
    constructor() {
        this.name = this.name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("i am eating"); 
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);   
    }
 bark() {
    console.log("woff..");
  }
}
class Cat extends Mammal {
    constructor(name) {
        super(name);   
    }
 meow() {
    console.log("meow");
  }
}