import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';


const customTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#db1e11',
    primary2Color: '#819595',
    primary3Color: grey400,
    accent1Color: '#8078a5',
    accent2Color: '#696773',
    accent3Color: '#dae2df',
    textColor: '#363836',
    secondaryTextColor: fade('#363836', 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#8078a5',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

export default customTheme;