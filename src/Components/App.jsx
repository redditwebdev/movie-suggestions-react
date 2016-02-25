import React, {Component} from 'react';

import {Hero} from './Hero.jsx';
import {MovieList} from './MovieList.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.model = this.props.model;
    // get the initial items from the server
    this.setItems(this.model.getAll());
    // set the initial data as empty
    this.state = {items: ['']};
  }

  setItems(itemsPromise) {
    itemsPromise
      .then(items => {
        this.setState({
          items
        });
      })
  }

  render() {
    return (
      <div>
        <Hero text={'Movie Suggestor'} />
        <MovieList items={['hi']} />
        {JSON.stringify(this.props)}
      </div>
    )
  }

  createItem(itemText, index) {
    return (
      <li key={index}>{itemText}</li>
    );
  }
}
