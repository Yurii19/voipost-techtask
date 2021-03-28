import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Page = () => {
  return (
    <Box display='flex' flexWrap='wrap' >
      <Box display='flex' flexDirection='column' flex='1'>
        <Box display='flex' justifyContent='space-around' alignItems='center'
          height='10vh' >
          <Button variant="contained" size='large'>Sign up</Button>
          <Button variant="contained" color='action'>Sign up</Button>
          <Button variant="contained" size='small'>Sign up</Button>
        </Box>
        <Box display='flex' justifyContent='space-around' alignItems='center'
          height='10vh' >
          <Button variant="contained" size='large'>Sign up</Button>
          <Button variant="contained" >Sign up</Button>
          <Button variant="contained" size='small'>Sign up</Button>
        </Box>
        <Box display='flex' justifyContent='space-around' alignItems='center'
          height='10vh' >
          <Button variant="contained" size='large'>Sign up</Button>
          <Button variant="contained" >Sign up</Button>
          <Button variant="contained" size='small'>Sign up</Button>
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
      </Box>
    </Box>
  )
}

export default Page;