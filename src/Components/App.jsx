import React, {Component} from 'react';

import {Hero} from './Hero.jsx';
import {MovieList} from './MovieList.jsx';

import {Typeahead} from 'react-typeahead';

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
        <Typeahead
          options={['Wow', 'weird', 'wally', 'walter', 'cool', 'neat']}
          className="typeahead-container"
          customClasses={{input: 'typeahead-input'}}
          placeholder="Enter a movie, genre, or actor that you enjoy"
        />
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
