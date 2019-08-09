import React, { Component } from 'react';
import './Main.css';

export default class DogList extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/dogs/')
      .then(res => {
        debugger;
      })
  }
  render() {
    return (
      <ul className="dog-list">

      </ul>
    );
  }
}