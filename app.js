const exampleArray = [1, 2, 3, 4, 5];
const exampleNumber = 12345;
const exampleObjectData = {keyOne: 1, keyTwo: 2, keyThree: 3};

function reverseNumber(number) {
  let minus1 = -1;
  let str = "" + number;
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  arr = arr + "";
  let numberReverse;
  if (arr.indexOf("-") === arr.length - 1) {
    arr = arr.replace(/\,/g, "");
    arr = arr.replace(/\-/g, "");
    numberReverse = Number(arr);
    numberReverse = numberReverse * minus1;
  } else {
    arr = arr.replace(/\,/g, "");
    numberReverse = Number(arr);
  }
  return console.log(numberReverse);
}
reverseNumber(exampleNumber);



function forEach(array, func) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
} 
forEach(exampleArray, function(element) {
     console.log(element)
  });


function map(array, func) {
  return forEach(array, func);
}
map(exampleArray, function(element) {
    return console.log(element + 3);
  });


function filter(array, func) {
  let resultArr = forEach(array, func);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (resultArr[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
filter(exampleArray, function(element) {
    if (element > 3){
      console.log(element)
    }
  });


function getAdultAppleLovers(data) {
  let filterFruit = filter(data, function(element) {
       return element.favoriteFruit === "apple"
      });
  let filterAge = filter(filterFruit, function(element) {
       return element.age > 18
      });
  return map(filterAge, function(element) {
      return console.log(element.name)
  });
}
getAdultAppleLovers(exampleObjectData);



function getKeys(Obj) {
  let keys = [];
  for (let key in Obj) {
    if (key !== undefined) {
      keys.push(key);
    }
  }
  return keys;
}
console.log(getKeys(exampleObjectData));


function getValues(Obj) {
  let values = [];
  for (let key in Obj) {
    if( key !== undefined) {
      values.push(Obj[key])
    }
  }
  return values;
}
console.log(getValues(exampleObjectData));


function showFormattedDate(dateObj) {
 let dayOfMonth = dateObj.getDate();
 let numberOfMonth = dateObj.getMonth();
 let strOfMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 let fullYear = dateObj.getFullYear();
 let selectedMonth;
 for (let i = 0; i <= 11; i++) {
     if (numberOfMonth === i) {
         selectedMonth = strOfMonths[i]
     }
 }
 return `It is ${dayOfMonth} of ${selectedMonth}, ${fullYear}`;
}
console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));