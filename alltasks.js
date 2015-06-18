console.log('==================');
console.log('======Task1=======');
console.log('==================');

// Write a function that sums an array of numbers:
// Numbers must be always of type Number
// Returns null if the array is empty
// Throws Error if the parameter is not passed (undefined)
// Throws if any of the elements is not convertible to Number



// returns a valid floating number
function validFloat(x){
	if(isNaN(x)) throw "Not a number!";
	return parseFloat(x);
}

function sumArray(arr) {
	// Empty input check
	if (arr == undefined) throw 'Input not provided!';
	if (arr.length == 0) return null;
	

	//sums all the elements after conversion to float:
	return arr.reduce(function(sum, current){
		return sum + validFloat(current);
	}, 0);

}


var test = [1, 2, 3, 4, 6];
console.log(sumArray(test));

// VERSION FOR The AUTO TESING SYSTEM

// function(){
// 	return function sumArray(arr) {

// 				// returns a valid floating number
// 				function validFloat(x){
// 					if(isNaN(x)) throw "Not a number!";
// 					return parseFloat(x);
// 				}
// 				// Empty input check
// 				if (arr == undefined) throw 'Input not provided!';
// 				if (arr.length == 0) return null;
				

// 				//sums all the elements after conversion to float:
// 				return arr.reduce(function(sum, current){
// 					return sum + validFloat(current);
// 			}, 0);

// 	}
// }



console.log('==================');
console.log('======Task2=======');
console.log('==================');

// Write a function that finds all the prime numbers in a range
// It should return the prime numbers in an array
// It must throw an Error if any of the range params is not convertible to Number
// It must throw an Error if any of the range params is missing

function primesBetween(a, b){
	var result = [],
		temp = 0,
		i = 0,
		j = 2;
	// Empty input check
	if (a == undefined || b == undefined) throw 'Input not provided!';
	a = validFloat(a); //this is the same validator/parser, used in task 1
	b = validFloat(b);

	//makes a the lower limit
	if (a > b){
		temp = a;
		a = b;
		b = temp;
	}
	//Negative numbers cannot be prime ;)
	if (a < 2) {
		a = 2;
	}

	// ensures that counting starts from the closer to 'a' integer (not greater than a)!
	if (a % 1 != 0) {
		i = Math.floor(a) + 1;
	} else {
		i = a;
	}

	// a standard prime checker
	for(i ; i <= b; i++){
		temp = true; //nice chance to reuse temp
		for(j = 2 ; j <= Math.sqrt(i); j++) {
			if (i % j == 0) {
				temp = false;
				break;
			}
		}
		if(temp){
			result.push(i);
		}
	}
	return result;
}

console.log(primesBetween(50.3, -30.2));

// Auto testing version:

// function(){
// 	return function primesBetween(a, b){
// 		// returns a valid floating number
// 		function validFloat(x){
// 			if(isNaN(x)) throw "Not a number!";
// 			return parseFloat(x);
// 		}
// 		var result = [],
// 			temp = 0,
// 			i = 0,
// 			j = 2;
// 		// Empty input check
// 		if (a == undefined || b == undefined) throw 'Input not provided!';
// 		a = validFloat(a); //this is the same validator/parser, used in task 1
// 		b = validFloat(b);

// 		//makes a the lower limit
// 		if (a > b){
// 			temp = a;
// 			a = b;
// 			b = temp;
// 		}
// 		//Negative numbers cannot be prime ;)
// 		if (a < 2) {
// 			a = 2;
// 		}

// 		// ensures that counting starts from the closer to 'a' integer (not greater than a)!
// 		if (a % 1 != 0) {
// 			i = Math.floor(a) + 1;
// 		} else {
// 			i = a;
// 		}

// 		// a standard prime checker
// 		for(i ; i <= b; i++){
// 			temp = true; //nice chance to reuse temp
// 			for(j = 2 ; j <= Math.sqrt(i); j++) {
// 				if (i % j == 0) {
// 					temp = false;
// 					break;
// 				}
// 			}
// 			if(temp){
// 				result.push(i);
// 			}
// 		}
// 		return result;
// 	}
// }
