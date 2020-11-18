import { createMuiTheme } from '@material-ui/core/styles';
import {grey,green} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: green[800],
      },
      secondary: {
        main: grey[500],
      },
    },
  });

  export default theme;