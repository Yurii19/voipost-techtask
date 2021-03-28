import { green } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const colors = {
  green: '#6D9B12',
  blue: '#4285F4',
  pink: '#F7957E',
};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({

  palette: {
    'neutral': {
      main: colors.green,
    },

  },

  overrides: {
    // MuiTypography: {
    //   variantMapping: {
    //     h1: 'h5',
    //     h2: 'h2',
    //     h3: 'h2',
    //     h4: 'h2',
    //     h5: 'h2',
    //     h6: 'h2',
    //     subtitle1: 'h2',
    //     subtitle2: 'h2',
    //     body1: 'span',
    //     body2: 'span',
    //   },
    // },

    MuiButton: {
      root: {
        backgroundColor: 'red',
        fontSize: '1rem',
        width: '133px',
        height: '50px',
      },
      sizeLarge: { width: '270px', height: '50px', },
      sizeSmall: { width: '120px', height: '40px', },
      backgroundColor: 'inherit',
    },
    defaultTheme: {
      backgroundColor: colors.pink,
    },

  }

});
export default theme;