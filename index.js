function isEquals(a, b) {
    return a === b;
}
console.log(isEquals(3,5));

function isBigger(a, b) {
    return a > b;
}
console.log(isBigger(3,5));

function storeNames(...str) {
    let arr = [];
    arr.push(...str);
    return arr;
}
console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));

function getDifference(a, b) {
    let result = a > b ? a - b : b - a;
    return result;
}
console.log(getDifference(3,5));

function negativeCount(arr) {
    let negative = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i])
        }
    }
    return negative.length;
}
console.log(negativeCount([0, -3, 5, 7]));


function letterCount(str1, str2) {
    return str1.split(str2).length - 1
}
console.log(letterCount("Marry", "r"));


function countPoints(arr) {
    let two = 2;
    let three = 3;
    let count = 0;
    for (let item of arr) {
        let res = item.split(':')

        for (let i = 0; i < res.length; i++) {
            let result1 = res[0].split()
            let result2 = res[1].split()
            if (+result1 > +result2) {
                count += three;
            } else if (+result1 === +result2) {
                count += 1;
            }
        }
    }
    return count / two;
}
console.log(countPoints(["95:74", "107:107", "99:110"]));