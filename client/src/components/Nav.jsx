import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Search from 'material-ui/svg-icons/action/search';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar
          title="DASHBOARD"
          titleStyle={{ textAlign: 'center' }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={
            <FlatButton>
              <Search
                style={{
                  color: 'white',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
            </FlatButton>
          }
        />
      </div>
    );
  }
}

export default Nav;
