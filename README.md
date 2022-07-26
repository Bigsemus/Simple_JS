# Data_types_Simple-JS

1.	Write	a	JavaScript	function	that	reverse	an	integer number.
      reverseNumber(12345) // returns 54321
      reverseNumber(-56789) // returns -98765
2.	Write	function,	which	iterates	over	array	and	executes	function	on	each	element.
      forEach([2,5,8], function(el) { console.log(el) }) // logs to
      console: 2 5 8
3.	 Write	 function,	 which	 returns	 transformed	 array	 based	 on	 function,	 which	 is	 passed	 as	 a
       parameter.	Reuse	function	from	task	2.
       map([2, 5, 8], function(el) { return el + 3; }) // returns [5, 8,
       11]
       map([1, 2, 3, 4, 5], function (el) { return el * 2; }) // returns
       [2, 4, 6, 8, 10]
4.	Write	function,	which	returns	filtered	array	based	on	function,	which	passed	as	a	parameter.
      Reuse	function	from	task	2.
      filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 }) //
      returns [5, 8, 6]
      filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 })
      //returns [4, 6, 8, 10]
5.	Write	 function,	which	returns	array	of	names	of	people,	who	are	over	18	and	 their	 favorite
      fruit	is	apple.	Reuse	functions	from	task	3 and	4.
      //See input data example in CODE section
      getAdultAppleLovers(data) // returns [‘Stein’]
6.	Write	function,	which	returns	array	of	keys	of	an	object.
      getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”,
      “keyTwo”, “keyThree”]
7.	Write	function,	which	returns	array	of	values	of	an	object.
      getValues({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]
8.	Write	function,	which	returns	formatted	date.
      showFormattedDate(new Date('2018-08-27T01:10:00')) // returns ‘It is
      27 of Aug, 2018’
      // every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
      RESTRICTIONS
      • Using any built–in array or object methods(besides push)
      • Using any external libraries