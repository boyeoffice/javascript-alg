import converToF from '../../src/convert/celsius';

test('it should return a number', () => {
  expect(converToF(32)).toEqual(expect.any(Number));
});

test('it should return -22', () => {
  expect(converToF(-30)).toEqual(-22);
});

test('it should return -10', () => {
  expect(converToF(-10)).toEqual(14);
});

test('it should return 32', () => {
  expect(converToF(0)).toEqual(32);
});

test('it should return 68', () => {
  expect(converToF(20)).toEqual(68);
});

test('it should return 86', () => {
  expect(converToF(30)).toEqual(86);
});
