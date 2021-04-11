import { Button, Box, Typography, TextField, InputLabel } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import theme from './theme';

console.log(theme);
const Test = () => {
  const theme = useTheme;
  return (
    <Box pt={2} display='flex' flexDirection='column' height='20vh' justifyContent='space-between'>
      {/* <Box mt={2} display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'></Box>
      <TextField id="text-123" placeholder='Placeholder' variant="filled" InputProps={{
        disableUnderline: true
      }} helperText="Full name"
        label='Test'
      />
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'></Box> */}
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
        <InputLabel>Hello</InputLabel>
        <TextField id="outlined-basic" label="" variant="filled" InputProps={{disableUnderline: true}}
          floatingLabelText="Fixed Floating Label Text"
          floatingLabelFixed={true}
        />
      </Box>


    </Box>
  )
}

export default Test;