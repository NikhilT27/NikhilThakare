import { createMuiTheme } from "@material-ui/core/styles"

const themeName = "Nikhil Theme"

export default createMuiTheme({
  themeName,
  typography: {
    fontFamily: ["'Poppins', sans-serif"].join(","),
  },
})
