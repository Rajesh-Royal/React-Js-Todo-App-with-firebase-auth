import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login'
import signup from './pages/signup'
import home from './pages/home';
import './App.css';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#8e99f3',
			main: '#3f51b5',
			dark: '#26418f',
			contrastText: '#fff'
		}
	}
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup}/>
          <Route exact path="/" component={home}/>
        </Switch>
      </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
