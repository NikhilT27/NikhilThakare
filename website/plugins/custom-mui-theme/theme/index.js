import { createMuiTheme } from "@material-ui/core/styles"

const themeName = "Nikhil Theme"

export default createMuiTheme({
  themeName,
  palette: {
    primary: {
      main: "#FFD700",
    },
    secondary: {
      main: "#fc0000 ",
    },
  },
  typography: {
    fontFamily: ["'Poppins', sans-serif"].join(","),
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },

    body2: {
      fontWeight: 700,
    },
    body1: {
      fontSize: 17,
    },
  },
})
