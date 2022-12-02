const futanoKodom = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['Algebra', 'Calculas', 'Geometry'],
    exam: function () {
        return (`${this.name} is participating in an exam.`);
    },
    improveExam: function (subject) {
        return (`${this.name} is taking an improve exam on ${subject}`);
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
};

const kachaBadam = {
    name: 'Badam Ali',
    money: 8000
};

// call method:
const badamSellingExam = futanoKodom.exam.call(kachaBadam);
// console.log(badamSellingExam);

const reTake = futanoKodom.improveExam.call(kachaBadam, 'sellingBhajaBadam');
// console.log(reTake);

const givingTreat = futanoKodom.treatDey.call(kachaBadam, 1000, 100);
// console.log(givingTreat);

// apply method:
const badamSellingExam2 = futanoKodom.exam.apply(kachaBadam, []);
// console.log(badamSellingExam2);

const reTake2 = futanoKodom.improveExam.apply(kachaBadam, ['selllingBhajaBdam']);
// console.log(reTake2);

const givingTreat2 = futanoKodom.treatDey.apply(kachaBadam, [1000, 100]);
// console.log(givingTreat2);

// bind method: 
const badamSellingExam3 = futanoKodom.exam.bind(kachaBadam);
const result = badamSellingExam3();
// console.log(result);

const reTake3 = futanoKodom.improveExam.bind(kachaBadam);
const result2 = reTake3('SellingBhajaBadam');
// console.log(result2);

const givingTreat3 = futanoKodom.treatDey.bind(kachaBadam);
const result3 = givingTreat3(1000, 100);
// console.log(result3);