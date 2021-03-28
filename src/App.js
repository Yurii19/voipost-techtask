import logo from './logo.svg';
import './App.css';
import Page from './Page';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Page />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
