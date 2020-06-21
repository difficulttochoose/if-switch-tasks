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


//SWITCH-CASE--------------------------------------------------------------------------------------

//1
const num = Number(prompt('Enter your number: 1, 2, 3, 4'));
let result;
switch (num) {
    case 1: {
        result = 'зима';
    }
        break;
    case 2: {
        result = 'весна';
    }
        break;
    case 3: {
        result = 'лето';
    }
        break;
    case 4: {
        result = 'осень';
    }
        break;
    default: {
        result = 'ОШИБКА';
    }
}
alert(result);

//2
const day = Number(prompt('Enter a day of the month from 1 to 31'));
let decade;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: {
        decade = 'Your number is in the first decade of the month';
    }
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20: {
        decade = 'Your number is in the second decade of the month';
    }
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31: {
        decade = 'Your number is in the third decade of the month';
    }
        break;
    default: {
        decade = 'ERROR! Maximum 31 days in a month';
    }
}
alert(decade);

//3
const month = Number(prompt('Enter a number from 1 to 12'))
let timeOfTheYear;
switch (month) {
    case 1:
    case 2:
    case 3: {
        timeOfTheYear = 'winter';
    }
        break;
    case 4:
    case 5:
    case 6: {
        timeOfTheYear = 'spring';
    }
        break;
    case 7:
    case 8:
    case 9: {
        timeOfTheYear = 'summer';
    }
        break;
    case 10:
    case 11:
    case 12: {
        timeOfTheYear = 'autumn';
    }
        break;
    default: {
        timeOfTheYear = 'There are only four times of the year';
    }
}
alert(timeOfTheYear);
