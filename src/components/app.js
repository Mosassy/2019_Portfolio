import React, { Component } from 'react';
import moment from "moment";

import PortfolioContaner from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";

// this is the parent component
class App extends Component {
  render() {
    return (
      <div className='app'>
      <NavigationContainer />
        <h1>Mosassy's Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        < PortfolioContaner />
      </div>
    );
  }
}
export default App;
