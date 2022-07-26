const birthday22 = new Date(2000, 9, 22);
function getAge(birthday) {
    let today = new Date();
    let now = today.getFullYear();
    let age = birthday.getFullYear();

    return now - age;
}
console.log(getAge(birthday22));

///////////////////////////////

function getWeekDay(date) {
    let Day = new Date(date);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[Day.getDay()];
}

console.log(getWeekDay(Date.now()));

////////////////////////////////

function getAmountDaysToNewYear() {
    let num2022 = 2022;
    let num24 = 24;
    let num60 = 60;
    let num1000 = 1000;
    let NY = new Date(num2022, 0);
    let today = new Date();
    let oneDay = num24 * num60 * num60 * num1000;
    return Math.round((NY.getTime() - today.getTime()) / oneDay);
}
console.log(getAmountDaysToNewYear());

//////////////////////////////////////

function getProgrammersDay(date) {
    let num256 = 256
    let year = new Date(date, 0, 1)
    let it = new Date(year.setDate(num256));
    let dd = it.getDate();
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let mm = month[it.getMonth()];
    let yy = it.getFullYear();
    let weekDay = getWeekDay(it);
    let celebrate = ` "${dd} ${mm}, ${yy} (${weekDay})" `;
    return celebrate;
}

console.log(getProgrammersDay(2020));

///////////////////////////////////////

function howFarIs(str) {
    let num2 = 2;
    let num6 = 6;
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let newStr = str[0].toUpperCase() + str.slice(1);
    let idx = days.indexOf(newStr);
    let today = new Date().getDay();
    if (today === idx) {
        alert(` "Hey, today is ${newStr} =)" `);
    } else if (today > idx) {
        alert(` "It's ${idx + num2} day(s) left till ${newStr}." `);
    } else {
        alert(` "It's ${num6 - idx} day(s) left till ${newStr}." `);
    }
}
howFarIs('Friday');

////////////////////////////////////////////////////

function isValidIdentifier(str) {
    console.log(/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(str));
}
isValidIdentifier('myVar!'); // false
isValidIdentifier('myVar$'); // true
isValidIdentifier('myVar_1'); // true
isValidIdentifier('1_myVar'); // false

//////////////////////////////////////////////////

function capitalize (str) {
    return str.replace(/(?:^|\s)(\S)/ug, m => m.toUpperCase());
}
let testStr1 = 'My name is John Smith. I am 27.';
console.log(capitalize(testStr1));

///////////////////////////////////////////////////////

function isValidAudioFile (str) {
    console.log(/[a-z][.aac|.mp3|.flac|.alac]*$ /.test(str));
}
isValidAudioFile('file.mp4'); // false
isValidAudioFile('my_file.mp3'); // false
isValidAudioFile('file.mp3'); // true

/////////////////////////////////////////////////

function getHexadecimalColors (str) {
    console.log(/#[0-9a-f]{6}|#[0-9a-f]{3}/g.test(str));
}

const testString = "color: #3f3; background-color: #AA00ef; and: #abcd";
getHexadecimalColors(testString);
getHexadecimalColors('red and #0000');

////////////////////////////////////////////////////

function isValidPassword (str) {
console.log(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(str))
}
isValidPassword('adent007')


///////////////////////////////////////////////////////////////////

// function addThousandsSeparators (str) {
//     let $1 = str[1];
//     let $2 = str[2];
//     str = str.toString();
//     let pattern = /(-?\d+)(\d{3})/;
//     // while (pattern.test(str)) {
//     //     str = str.replace(`${pattern}, "${$1},${$2}"`);
//     // }
//     console.log(pattern)
//     return console.log(str);
// }
//
// addThousandsSeparators("1234567890"); // "1,234,567,890"
// addThousandsSeparators(1234567890); // "1,234,567,890"

/////////////////////////////////////////////////////////////////////////////////

function getAllUrlsFromText (str) {
return str.match(/(https:\/\/.[\S]+\/)/);
}
const text1 = 'We use https://translate.google.com/ to translate some words and phrases from https://angular.io/ ';
console.log(getAllUrlsFromText(text1));

// /#([a-f0-9]{3}){1,2}\b/ig   HEX 9
//   /#[0-9a-f]{6}|#[0-9a-f]{3}/g   regex  get color
// [a-z][.aac|.mp3|.flac|.alac]*$   8 audio
// "[jdsbkb]{0,9}"
//.+ = anysing simbol
// * = {0,n} + = {1n} ? = {0,1}
// group "(ma|pa){2}"
// ^ start
// $ finish
// [^not]
// g = global
// i = not registr
// \d 5465
// \D not 6545
// \s prob
// \w fjdfgjdfk
// .exec(str)
//exp. /B[eou]/
//string methods
// "Hello world".match(/rergoi95/);
// .search(/dfgr655/) found where ?
// .split(/jfuhdfuhj/) /
// .replase(/shdfjhs55/, "kdffj") zamena what /dff565/ na "fffvf"