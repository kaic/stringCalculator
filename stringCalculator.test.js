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
 });