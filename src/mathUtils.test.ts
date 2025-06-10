import { add, subtract } from './mathUtils';

test('add function adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract function subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});
