import { createMuiTheme } from '@material-ui/core/styles'
import theme from './Light.json'

const darkTheme = createMuiTheme({
  ...theme,
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
})

export default darkTheme
