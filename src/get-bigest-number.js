
  const getBigestNumber = (...arg) => {
    
if(arg.some(el => typeof el === 'string')) {
    throw new Error('Wrong argument type')
} else if (arg.length < 2) {
   throw new Error('Not enough arguments')
} else if (arg.length > 10) {
  throw new Error('Too many arguments')
} else {
    return Math.max(...arg)
}

  }

  module.exports = {
    getBigestNumber
    };