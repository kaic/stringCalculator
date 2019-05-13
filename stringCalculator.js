const add = (string) => {
	const reducerSum = (accumulator, currentValue) => accumulator + Number(currentValue);

	let numbersToSum = string.split(',');
	let splitIndex;

	let newNumbersToSum = numbersToSum.map((number, index, array) => { 

		if(number.search('\n') == 1) {

			let splitedNumbers = number.split('\n');
			splitIndex = index;
			return splitedNumbers;

		}

		return number;
	});

	if(splitIndex || splitIndex === 0) {
		numbersToSum.splice(splitIndex, splitIndex + 1);

		newNumbersToSum.map((number) => { 
			if (Array.isArray(number)) {
				number.map((n) => numbersToSum.unshift(n));
			}
		});
	}

	console.log(numbersToSum)

	const result = numbersToSum.reduce(reducerSum, 0);

	return result;
}

module.exports = {
	add
}