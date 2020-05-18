import React from 'react';
import SideNav from './sidenav';
import '../static/css/base.css'


class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="left">
          <SideNav/>
        </div>
        <div style={{paddingLeft: "2em"}}>

        </div>
      </div>
    );
  }
}

export default App;