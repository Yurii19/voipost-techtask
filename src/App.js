import logo from './logo.svg';
import './App.css';
import Page from './Page';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { CssBaseline } from '@material-ui/core';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page} />
                <Route exact path="/form" component={MyForm} />
            </Switch>
        </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
