//IF-ELSE----------------------------------------------------------------------------------

//1
const a = Number(prompt('Enter your number: 1, 0 or -3'));
if (a === 0) {
    alert('Right');
} else {
    alert('Wrong');
}

//2
const a2 = Number(prompt('Enter your number: 1, 0 or -3'));
if (a2 > 0) {
    alert('Right');
} else {
    alert('Wrong');
}

//3
const a3 = Number(prompt('Enter your number: 1, 0 or -3'));
if (a3 < 0) {
    alert('Right');
} else {
    alert('Wrong');
}

//4
const a4 = Number(prompt('Enter your number: 1, 0 or -3'));
if (a4 >= 0) {
    alert('Right');
} else {
    alert('Wrong');
}

//5
const a5 = Number(prompt('Enter your number: 1, 0 or -3'));
if (a5 <= 0) {
    alert('Right');
} else {
    alert('Wrong');
}

//6
const a6 = Number(prompt('Enter your number: 1, 0 or -3'));
if (a6 !== 0) {
    alert('Right');
} else {
    alert('Wrong');
}

//7
const a7 = prompt('Enter your value: test, тест, 3');
if (a7 === 'test') {
    alert('Right');
} else {
    alert('Wrong');
}

//8
let a8 = '1';//check with '1', 1, 3
if (a8 === '1') {
    alert('Right');
} else {
    alert('Wrong');
}


//&& and ||-------------------------------------------------------------------------------------------

//1
const x = Number(prompt('Enter your number: 5, 0, -3 or 2'));
if (x > 0 && x < 5) {
    alert('Right');
} else {
    alert('Wrong');
}

//2
const c = Number(prompt('Enter your number: 5, 0, -3 or 2'));
let o;
if (c === 0 || c === 2) {
    o = c + 7;
} else {
    o = c / 10;
}
alert(o);

//3
const p = Number(prompt('Enter your number: 1, 0 and 3'));
const y = Number(prompt('Enter your number: 3, 6 and 5'));
let w;
if (p <= 1 && y >= 3) {
    w = p + y;
} else {
    w = p - y;
}
alert(w);

//4
const r = Number(prompt('Enter your number'));
const t = Number(prompt('Enter your number'));
if (r > 2 && r < 11 || t >= 6 && t < 14) {
    alert('Right');
} else {
    alert('Wrong');
}
