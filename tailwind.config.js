/** @type {import("tailwindcss/defaultConfig")} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: { extend: { colors: { primary: { main: "#00d372" } } } },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
};
