import converToF from '../../src/convert/celsius';

test('it should return a number', () => {
  expect(converToF(32)).toBe(89.6);
});

test('it should return -22', () => {
  expect(converToF(-30)).toEqual(-22);
});

test('it should return -10', () => {
  expect(converToF(-10)).toEqual(14);
});
