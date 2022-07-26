'use strict'

function log(e) {
    console.log(e)
}

function getMaxEvenElement() {
    return Math.max(...arr.filter(el => el % 2 === 0))
}
const arr = ['1', '3', '4', '2', '5'];
log(getMaxEvenElement(arr))

let a = 3;
let b = 5;
[a, b] = [b, a]
log(a);
log(b);

function getValue(e) {
    return e ?? '-';
}
log(getValue(0));
log(getValue(4));
log(getValue('some txt'));
log(getValue(null));
log(getValue(undefined));

function getObjFromArray([[, name], [, age], [, city]]) {
    return { name, age, city }
}
const arrayOfArrays = [
    ['name', 'dan'],
    ['age', '21'],
    ['city', 'lviv']
];
log(getObjFromArray(arrayOfArrays));

function addUniqueId({ name }) {
    let id = Symbol()
    return { name, id }
}
const obj1 = { name: 'nick' };
log(addUniqueId(obj1));
log(addUniqueId({ name: 'buffy' }));
log(Object.keys(obj1).includes('id'));

function getRegroupedObject({ name: firstName, details: user }) {
    const { id, age, university } = user;
    return { university, user: { age, firstName, id } }
}
const oldObj = {
    name: 'willow',
    details: { id: 1, age: 47, university: 'LNU' }
};
log(getRegroupedObject(oldObj));

const getArrayWithUniqueElements = arr => [...new Set(arr)]
// function getArrayWithUniqueElements(arr) {
//     return Array.from(new Set(arr))
// }
const array = [2, 3, 4, 2, 4, 'a', 'c', 'a'];
log(getArrayWithUniqueElements(array));

function hideNumber(num) {
    return num.slice(6).padStart(9, '*')
}
const phoneNumber = '0123456789';
log(hideNumber(phoneNumber));

function add(a, b = new Error('b is reguired')) {
    return 'object' === typeof b ? b : a + b;
}
log(add(2, 3));
log(add(2));


const obj = { a: 'I', b: 'Love', c: 'EPAM' }
obj[Symbol.iterator] = function* () {
    let values = Object.values(this)
    log(values)
    for (let i = 0; i < values.length; i++) {
        yield i;
    }
}

let iter = [...Object.values(obj)]

for (let value of iter) {
    log(value);
}
// function* iter(n = 5) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }  
// }

// for (let j of iter()) {
//     log(j)
// }