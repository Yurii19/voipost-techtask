import { green, red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const colors = {
  green: '#6D9B12',
  greenHover: '#4B9E2F',
  blue: '#4285F4',
  blueHover: '#1862F5',
  pink: '#F7957E',

};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({

  overrides: {


    MuiInputLabel: {
      root: {
        
        color: 'black',
        "&$focused": {
          color: colors.green,
        },
        "&$error":{
          color: 'red',
        },
        
      },
      filled: {
      //   "&$focused":{
      //     color: colors.green,
      //   },

        // "&$error&$focused":{
        //   color: 'red',
        // },
        transform: 'translate(0px, -25px) scale(1.2)',
        '&$shrink': {
          transform: 'translate(0px, -25px) scale(1.2)',
         },
       },
    },


    MuiFilledInput: {

      root: {
        padding: '0 auto',
        borderRadius: '6px',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        "&$focused": {
          boxShadow: ` 0px 0px 0px 2px ${colors.green};`,
          //color: `${colors.green};`,
        },
      },
      input: {
        padding: '15px',
      },
      colorSecondary: {
        boxShadow: ` 0px 0px 0px 2px red;`,
        "&$focused": {
          boxShadow: ` 0px 0px 0px 2px red;`,
        },
      },
    },

    MuiTextField: {
      label: {
        fontSize: '5px',
      },
      root: {
       // padding: '0 auto',
        //height: '50px',
      //  border: '1px dotted black',
      //  marginTop: '20px',
      }
    },

    MuiButton: {
      containedPrimary: {
        backgroundColor: colors.blue,
        "&:hover": {
          backgroundColor: colors.blueHover,
        },
      },
      containedSecondary: {
        backgroundColor: colors.green,
        "&:hover": {
          backgroundColor: colors.greenHover,
        },
      },
      root: {
        backgroundColor: 'red',
        width: '133px',
        height: '50px',
      },
      sizeLarge: { width: '270px', height: '50px', },
      sizeSmall: { width: '120px', height: '40px', },
    },
  }

});
export default theme;