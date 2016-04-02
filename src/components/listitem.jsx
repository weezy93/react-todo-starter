import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.item.text,
      done: this.props.item.done,
    };

    this.onDoneChange = this.onDoneChange.bind(this);
  }

onDoneChange() {
  this.setState({ done: event.target.checked });
}

  render() {
    return (
      <div className="input-group"
      style={ style }>
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.onDoneChange}
            />
        </span>
        <input
          type="text"
          className="form-control"
          defaultValue={this.state.text}
          disabled={this.state.done}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-danger"
            enabled={this.this.state.done}
            >
          Delete
          </button>
        </span>
      </div>
    );
  }
}



var style = {
  paddingBottom : '10px',
  fontSize : '16px'
}
