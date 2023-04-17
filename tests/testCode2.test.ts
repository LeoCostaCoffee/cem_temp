import addTwoNumbers from '../src/testCode2';

describe('addTwoNumbers', () => {
  it('should add two positive numbers correctly', () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
  });

  it('should add a positive and negative number correctly', () => {
    expect(addTwoNumbers(2, -3)).toBe(-1);
  });

  it('should add two negative numbers correctly', () => {
    expect(addTwoNumbers(-2, -3)).toBe(-5);
  });

  it('should add two decimal numbers correctly', () => {
    expect(addTwoNumbers(2.5, 3.5)).toBe(6);
  });
});
