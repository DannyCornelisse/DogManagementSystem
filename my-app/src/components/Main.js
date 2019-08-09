import React, { Component } from 'react';
import './Main.css';
import DogList from './DogList';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Welcome to the dog managenent system!</h1>
        <small>Where you can create, update, and delete your dogs</small>
        <DogList></DogList>
      </div>
    );
  }
}