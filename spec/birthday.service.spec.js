const test = require('../src/birthday.service');

it('Returns the biggest value', function(){
        expect(test.getBigestNumber(1, 2, 3, 4)).toBe(4);
    })

describe('test', () => {
    it('Wrong argument!', function(){
        expect(() => test.birthday.howLongToMyBirthd('')).toThrowMatching(function(thrown) {
             return thrown.message === 'Wrong argument!'; 
        });
    });

    it('Soon...Please, wait just 30 day/s', function(){
        expect(test.birthday.howLongToMyBirthd('06.27.2021')).toBe('Soon...Please, wait just 30 day/s');  
        });
   

    it("Oh, you have celebrated it 395 day/s ago, don't you remember?", function(){
        expect(test.birthday.howLongToMyBirthd('06.27.2020'))
        .toBe("Oh, you have celebrated it 395 day/s ago, don't you remember?");
        });
    })
