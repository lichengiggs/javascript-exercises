const convertToCelsius = function(degree) {
  const celsius = (degree - 32) * (5 / 9);
  return  roundNumber(celsius);
};

const convertToFahrenheit = function(degree) {
  const fahrenheit = degree * (9 / 5) + 32;
  return roundNumber(fahrenheit);
};

function roundNumber(num) {
  return Math.round(num * 10) / 10;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
