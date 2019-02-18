import React, { Component } from 'react';
import Menu from './components/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div class="grid">
        <div class="title">Castle</div>
        <div class="description">
          <p>
            This website helps you to choose in which castle you should the spend the weekend.<br />
            All the restaurants of the list have a Michelin star.<br />
            The prices displayed below are the cheapest for each hotel.
          </p>
        </div>
        <div class="menu">
          <Menu />
        </div>
        <div class="results">Results</div>
      </div>
    );
  }
}

export default App;
