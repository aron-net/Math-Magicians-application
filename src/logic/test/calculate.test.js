import calculate from '../calculate';

test('AC button null', () => {
  const resultObj = {
    total: null,
    next: null,
    operation: null,
  };
  const outputObj = calculate({}, 'AC');
  expect(outputObj).toEqual(resultObj);
});
