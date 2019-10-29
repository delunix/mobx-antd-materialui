import React from 'react';
import logo from './logo.svg';
import './App.css';

import theme from './main-theme'
import { Switch, Route, withRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';

import InitPage from './pages/Init';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/" component={DashboardPage} />
      </Switch>
    </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
