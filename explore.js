// 1. creat object using object literal:
const player = {};
player.name = 'Lord Shanto';
player.specialty = 'Batsman';
player.bat = function () {
    console.log('Swing the ball');
}

// console.log(player);
// player.bat();

const student = {
    name: 'Panday',
    job: 'Khay Anday',
    ball: function () {
        console.log('Throw the ball');
    },
    salary: 100000
}
// console.log(student);
// student.ball();

// 2. object constructor:
const person = new Object();
// console.log(person);

// 3. object create method:
const atel = Object.create(null);
const atel2 = Object.create(player);
console.log(atel2.bat());

// 4. class:
class Person {
    name = 'Abul';
    address = 'shodor ghat';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(15);
// console.log(person1);

// 5. function: 
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);
// console.log(tesla);