const assert = require('chai').assert;

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
    it('should return 10 when the value is "1\n2,3\n4"', () => {
      const result = stringCalculator.add("1\n2,3\n4"); 
      assert.equal(result, 10);
    });
    it('should return 3 when the value is "//;\n1;2" - new delimiter', () => {
      const result = stringCalculator.add("//;\n1;2"); 
      assert.equal(result, 3);
    });
    it('should return 6 when the value is "//k\n1k2k3" - new delimiter', () => {
      const result = stringCalculator.add("//k\n1k2k3"); 
      assert.equal(result, 6);
    });
    it('should throw an error when the value is "1,-2,3" - no accept negative numbers', () => {
      const result = () => stringCalculator.add("1,-2,3");
      const expected = "Negatives not allowed: -2"; 
      assert.throws( result, expected );
    });
    it('should throw an error when the value is "-1,-2,-3" - no accept negative numbers and show the negatives numbers on error message', () => {
      const result = () => stringCalculator.add("-1,-2,-3");
      const expected = "Negatives not allowed: -1,-2,-3"; 
      assert.throws( result, expected );
    });
    it('GetCalledCount() should return how many times Add() method was called', () => {
      const count = stringCalculator.getCalledCount();
      assert.equal( count, 9 );
    });
    it('should ignore numbers bigger than 1000 - "1,1000,1500,2" = 3', () => {
      const result = stringCalculator.add("1,1000,1500,2"); 
      assert.equal(result, 3);
    });
 });

//GetCalledCount