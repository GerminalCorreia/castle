import React, { Component } from 'react';
import axios from 'axios';
import Table from './components/Table';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      direction: {}
    }
    this.getData();
    this.sortBy = this.sortBy.bind(this)
  }

  // To get the data from the server
  getData() {
    axios.get('http://localhost:5000/api/name')
      .then(res => {
        res.data.castles.forEach(castle => {
          this.setState({ data: [...this.state.data, castle]})
        });
        console.log("Data loaded")
      });
  }

  // To sort the castles by their price
  sortBy(key) {
    this.setState({
      data: this.state.data.sort( (a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  render() {
    return (
      <div className="grid">
        <div className="title">Castle</div>
        <div className="description">
          <p>
            This website helps you to choose in which castle you should the spend the weekend.<br />
            All the restaurants of the list have a Michelin star.<br />
            The prices displayed below are the cheapest for each hotel.
          </p>
        </div>
        <div className="results">
          <Table data={this.state.data} sortBy={this.sortBy}/>
        </div>
      </div>
    );
  }
}

export default App;
