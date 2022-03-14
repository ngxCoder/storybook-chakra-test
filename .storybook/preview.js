import theme from "../src/theme";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
    colorModeSwitch: {
      position: 'top-left',
      zIndex: 9999,
      margin: '1rem'
    }
  }
}