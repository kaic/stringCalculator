const assert = require('assert');

const stringCalculator = require('./stringCalculator');

describe('String Calculator', () => {
    it('should return 3 when the value is "1,2"', () => {
    const result = stringCalculator.add("1,2");
      assert.equal(result, 3);
    });

    it('should return 0 when the value is ""', () => {
    const result = stringCalculator.add("");
      assert.equal(result, 0);
    });

    it('should return 10 when the value is "1,2,3,4"', () => {
    const result = stringCalculator.add("1,2,3,4");
      assert.equal(result, 10);
    });

    it('should return 6 when the value is "1\n2,3"', () => {
    const result = stringCalculator.add("1\n2,3"); 
      assert.equal(result, 6);
    });
 });