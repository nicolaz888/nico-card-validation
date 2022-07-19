import validator from './validator.js';
import { Chart } from 'chart.js';

console.log(validator);

console.log(validator.isValid('4137894711755904')); // true
// console.log(validator.isValid('4083952015263')); // true
// console.log(validator.isValid('79927398713')); // true
// console.log(validator.isValid('1234567890')); // false
console.log(validator.maskify('4137894711755904'));
console.log(validator.maskify('1'));
console.log(validator.maskify('12'));
console.log(validator.maskify('123'));
console.log(validator.maskify('1234'));
console.log(validator.maskify('12345'));

//--------------------
// chart.js
//--------------------

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



