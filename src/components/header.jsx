import React, { Component } from 'react';

class Header extends Component {
  constructor(props) { // class method, how to instantiate a state on a new component
    super(props); // always pass in props, super has to be on first line and take props as argument
    this.id = 0;
    this.state = {
      id: this.id,
      text: '123',
      done: false,
    };

    // this runs on instantiation rather than on data changing
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

onInputChange(event) {
  this.setState({ text: event.target.value });
}

onAddClick() {
  this.id++;
  this.props.add(this.state);
  this.setState({ id: this.id, text: '' });
}

// this in the onChange references
  render() {
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={this.onInputChange}
            />
          <span className="input-group-btn">
            <button
            type="button"
            className="btn btn-success"
            onClick={this.onAddClick}
            >
            Add
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
