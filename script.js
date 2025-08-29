function convertTemperature() {
  // Get the temperature value from input
  var temp = document.getElementById("temperature").value;

  // Get the conversion type
  var conversion = document.getElementById("conversion").value;

  // Get the result element
  var result = document.getElementById("result");

  // Check if the input is empty
  if (temp === "") {
    result.textContent = "Please enter a number.";
    return;
  }

  // Convert to number
  temp = parseFloat(temp);

  // Do the conversion
  if (conversion === "toFahrenheit") {
    var fahrenheit = (temp * 9 / 5) + 32;
    result.textContent = temp + "°C = " + fahrenheit.toFixed(2) + "°F";
  } else {
    var celsius = (temp - 32) * 5 / 9;
    result.textContent = temp + "°F = " + celsius.toFixed(2) + "°C";
  }
}
