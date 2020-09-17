const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          100: "#FFFFFF",
          200: "#D5D5D5",
          800: "#333333",
          900: "#262626",
        },
      },
    },
  },
  variants: {},
  plugings: [],
};
