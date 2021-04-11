import { Button, Box, Typography, TextField, InputLabel  } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Test from './Test.js';
import theme from './theme';

console.log(theme);
const Page = () => {
  return (
    <Box display='flex' flexWrap='wrap' >
      <Box display='flex' flexDirection='column' flex='1' pr={5}>
        <Box display='flex' justifyContent='space-around' alignItems='center'
          height='10vh'>
          <Button variant="contained" color='secondary' size='large'>Sign up</Button>
          <Button variant="contained" color='secondary'>Sign up</Button>
          <Button variant="contained" color='secondary' size='small'>Sign up</Button>
        </Box>
        <Box display='flex' justifyContent='space-around' alignItems='center'
          height='10vh' >
          <Button variant="contained" color='primary' size='large'>Sign up</Button>
          <Button variant="contained" color='primary'>Sign up</Button>
          <Button variant="contained" color='primary' size='small'>Sign up</Button>
        </Box>
        <Box display='flex' justifyContent='space-around' alignItems='center'
          height='10vh' >
          <Button variant="contained" size='large'>Sign up</Button>
          <Button variant="contained" >Sign up</Button>
          <Button variant="contained" size='small'>Sign up</Button>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='flex-start'
          justifyContent='space-around' pl={3} minHeight='40vh'>
            <TextField id="text" placeholder="Default"  variant="filled" defaultValue='Your name'
            label='Full Name'
             InputProps={{ disableUnderline: true }} />
          <TextField id="text"  placeholder='Placeholder' variant="filled" label='Email Adress'
           InputProps={{ disableUnderline: true }} 
           InputLabelProps={{color: 'secondary'}}
          />
          <TextField  id="standard-multiline-flexible"  placeholder='Error' variant="filled" 
           name='asdf' color='secondary' label='Password (8 characters)' 
           shrink='true' error='true'
          InputProps={{ disableUnderline: true }}
          
          />
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' flex='1' alignItems='flex-start'>
        <Typography variant="h1">Typography</Typography>
        <Typography variant="h2">Typography</Typography>
        <Typography variant="h3">Typography</Typography>
        <Typography variant="h4">Typography</Typography>
        <Typography variant="h5">Typography</Typography>
        <Typography variant="h6">Typography</Typography>
        <Typography element="span">Typography</Typography>
        <Typography element="span">Typography</Typography>
        <Test />
      </Box>
     
    </Box>
  )
}

export default Page;