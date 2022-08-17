import operate from '../operate';

test('Subtraction', () => {
  expect(operate(10, 4, '-')).toBe('6');
});
