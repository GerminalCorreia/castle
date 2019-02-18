import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
        <button type="button">Sort by Name</button>
        <button type="button">Sort by Price</button>
      </div>
    );
  }
}

export default Menu;
