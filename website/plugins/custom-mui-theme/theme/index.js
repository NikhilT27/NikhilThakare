import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme()

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
      [theme.breakpoints.down("xs")]: {
        fontSize: "22px",
      },
    },
    h5: {
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: "21px",
      },
    },

    h6: {
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
      },
    },

    body2: {
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    body1: {
      fontSize: 17,
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  },
})
