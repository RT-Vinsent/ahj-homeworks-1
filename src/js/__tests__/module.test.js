import sum from '../module';

test('test sum function', () => {
  const expected = 10;
  const received = sum(4, 6);

  expect(received).toEqual(expected);
});
