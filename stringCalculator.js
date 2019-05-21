let timesAddWasCalled = 0;

const add = (string) => {
	timesAddWasCalled ++;

	let negatives = [];
	const reducerSum = (accumulator, currentValue) =>  { 
		if (currentValue < 0) negatives.push(currentValue);
		return accumulator + Number(currentValue);
	}

	let delimiter = ',';

	if(string.slice(0,2) == '//') { 
		delimiter = string[2];
		string = string.replace(`//${delimiter}`, '');
	}

	let numbersToSum = string.split(delimiter);	

	let newNumbersToSum = numbersToSum.map((number, index, array) => { 

		if(number.search('\n') == 1) {

			let splitedNumbers = number.split('\n');
			return splitedNumbers;

		}

		return number;
	});

	//flat the array
	newNumbersToSum = newNumbersToSum.reduce((total, amount) => {
  		return total.concat(amount);
	}, []);

	const result = newNumbersToSum.reduce(reducerSum, 0);
	if (negatives.length > 0) throw  `Negatives not allowed: ${negatives}`

	return result;
}

const getCalledCount = () => timesAddWasCalled;

module.exports = {
	add,
	getCalledCount
}