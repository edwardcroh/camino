import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/index';
import actions from './redux/actions/index';
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
  <Provider store={store}>
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
