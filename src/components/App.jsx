import React from 'react';

// pull in something called component and assign to a variable called component
import { Component } from 'react';
import Header from './Header';

// allows it to use functions from component
// every react component must have a render function
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.onAddClick = this.onAddClick.bind(this);
  }

onAddClick(newItem) {
  this.setState({
    items: this.state.items.concat([newItem]),
  });
}

  render() {
    console.log(this.state.items);
    return (
      <div className="text-center">
        <h1>My Todo List</h1>
        <Header add={this.onAddClick}/>
      </div>
    );
  }
}

// jsx allows you to write html in javascript. use className instead of class
