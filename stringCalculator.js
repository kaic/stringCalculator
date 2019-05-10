const add = (string) => {
	const reducerSum = (accumulator, currentValue) => accumulator + Number(currentValue);
	const numbersToSum = string.split(',');

	const result = numbersToSum.reduce(reducerSum, 0);

	return result;
}

module.exports = {
	add
}