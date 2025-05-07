const lightColors = require("./json/light.json");
const darkColors = require("./json/dark.json");

function getColors(theme) {
  switch (theme) {
    case "light":
      return lightColors;
    case "dark":
      return darkColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
