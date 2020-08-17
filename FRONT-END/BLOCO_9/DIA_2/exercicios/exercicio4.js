const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const handleError = (errorReason) => {
  console.log(`Error getting temperature: ${errorReason}`);
};
const sendMarsTemperature = (onSucess, onError) => {
  const didOperationSucceed = Math.random() >= 0.6;
  const mensageError = "Robot is busy";
  if (onSucess && didOperationSucceed) {
    return onSucess(getMarsTemperature());
  } else if (onError && !didOperationSucceed) {
    return onError(mensageError);
  }
  return console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
};

setTimeout(() => sendMarsTemperature(), messageDelay());
// imprime "Mars temperature is: 20 degree Celsius", por exemplo
setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay());
// imprime "It is currently 47ºF at Mars", por exemplo
setTimeout(() => sendMarsTemperature(greet), messageDelay());
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
setTimeout(
  () => sendMarsTemperature(temperatureInFahrenheit, handleError),
  messageDelay()
);
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(greet, handleError), messageDelay());
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
