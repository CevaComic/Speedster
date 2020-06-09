import { createMuiTheme } from '@material-ui/core/styles'
import theme from './Light.json'

const Theme = createMuiTheme({
  ...theme,
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
})

export default Theme
