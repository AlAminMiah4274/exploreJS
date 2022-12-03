// console.log(this);

const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['Algebra', 'Calculas', 'Geometry'],
    exam: function () {
        console.log(this);
        return (`${this.name} is participating in an exam.`);
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
    },
    improveExam: function (subject) {
        return (`${this.name} is taking an improve exam on ${subject}`);
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
};

kodomAli.exam();

const badamAli = {
    name: 'Kacha Badam Ali',
    money: 8000
};

badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler() {
    console.log('inside the click me', this);
};

document.getElementById('btn-click2').addEventListener('click', function () {
    console.log(this);
})

function mine() {
    console.log(this);
}
mine();

// Ways to clone object: 
const data = { name: 'Alice', age: 23 };
const dataCopy = data;

// shalow copy 
const shalowCopy = { ...data };

// deep copy 
const deepCopy = JSON.parse(JSON.stringify(data));