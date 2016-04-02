import React from 'react';

// pull in something called component and assign to a variable called component
import { Component } from 'react';
import Header from './header';
import List from './list';

// allows it to use functions from component
// every react component must have a render function
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.onAddClick = this.onAddClick.bind(this);
    this.onDeleteclick = this.onDeleteclick.bind(this);
  }

onAddClick(newItem) {
  this.setState({
    items: this.state.items.concat([newItem]),
  });
}

// const variable can't update that value ( readonly variable ; let will let you change )
onDeleteclick(id) {
  const newItems = this.state.items.slice();
  const index = newItems.map(x => x.id).indexOf(id);
  newItems.splice(index, 1);
  this.setState({ items: newItems });
}

  render() {
    return (
      <div className="text-center">
        <h1>My Todo List</h1>
        <Header add={this.onAddClick}/>
        <hr/>
        <List delete={this.onDeleteclick} items={this.state.items}/>
      </div>
    );
  }
}

// jsx allows you to write html in javascript. use className instead of class
