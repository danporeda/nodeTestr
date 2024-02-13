const assert = require('assert');
const { forEach } = require('../index');

let numbers;
beforeEach(() => {
  numbers = [1,2,3];
});

it('should sum an array', () => {
  let total = 0;
  forEach(numbers, (value) => {
    total += value;
  });

  assert.strictEqual(total, 6);
});

it('should multiply an array', () => {
  let total = 2;
  forEach(numbers, (value) => {
    total *= value;
  });

  assert.strictEqual(total, 12);
})

it('BeforeEach is ran each time (by numbers.length', () => {
  assert.strictEqual(numbers.length, 3);
});

it('BeforeEach is ran each time (by array item)', () => {
  assert.strictEqual(numbers[0], 1);
  assert.strictEqual(numbers[1], 2);
  assert.strictEqual(numbers[2], 3);
});