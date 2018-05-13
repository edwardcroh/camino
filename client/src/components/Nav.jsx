import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar
          style={{
            position: 'static',
            background: 'transparent',
            boxShadow: 'none'
          }}
          title="DASHBOARD"
          titleStyle={{
            textAlign: 'center',
            color: 'rgb(255, 242, 210)',
            fontWeight: 'lighter'
          }}
          iconElementRight={
            <IconButton>
              <Search />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default Nav;
