const add = (string) => {
	const reducerSum = (accumulator, currentValue) => accumulator + Number(currentValue);

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

	return result;
}

module.exports = {
	add
}