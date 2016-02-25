import React, {Component} from 'react';

export class MovieList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(this.createItem)}
      </ul>
    )
  }

  createItem(itemText, index) {
    return (
      <li key={index}>{itemText}</li>
    );
  }

}
