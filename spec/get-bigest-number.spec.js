
const test = require('../src/get-bigest-number');


describe('test', () => {
    it('Not enough arguments', function(){
        expect(() => test.getBigestNumber(1)).toThrowMatching(function(thrown) {
             return thrown.message === 'Not enough arguments'; 
        });
    });

    it('Too many arguments', function(){
        expect(() => test.getBigestNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toThrowMatching(function(thrown) {
             return thrown.message === 'Too many arguments'; 
        });
    });

    it('Wrong argument type', function(){
        expect(() => test.getBigestNumber(1, '1')).toThrowMatching(function(thrown) {
             return thrown.message === 'Wrong argument type';
        });
    })

    it('Returns the biggest value', function(){
        expect(test.getBigestNumber(1, 2, 3, 4)).toBe(4);
    })
})