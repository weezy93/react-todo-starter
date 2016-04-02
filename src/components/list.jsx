import React from 'react';
import ListItem from './listitem';

export default class List extends React.Component {

  renderList() {
    return this.props.items.map((item) => {
      return <ListItem key={item.id} item={item}/>;

      // react looks for a key to identify lists,
      // so that things are not re-rendered because react cannot find just one
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
};
