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
         <div>Hello World</div>
         <div>Hello World</div>
         <div>Hello World</div>
         <div>Hello World</div>
         

         Hello World
         Hello World
         Hello World
      </div>
    );
  }
}

export default App;