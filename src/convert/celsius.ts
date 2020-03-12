/**
  *The algorithm to convert from Celsus to
  *Fahrenheit is the temperature in Celsius
  *times 9/5, plus 32.
 */

 const converToF = (celsius: number):number => {
  let fahernheit;
  fahernheit = celsius * (9/5) + 32;
  return fahernheit;
 }

 export default converToF;
 