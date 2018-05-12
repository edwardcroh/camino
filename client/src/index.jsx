import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Date from './components/Date.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Date />
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>,
  document.getElementById('app')
);
