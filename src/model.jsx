import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

export default class MoviesModel {
  constructor() {
    // create a new Lokka client
    this.client = new Lokka({
      transport: new Transport('https://omdb-graphql.herokuapp.com/')
    });

    // Get the initial data from the transport (it's a promise)
    this.dataPromise = this.client
      // invoke the GraphQL query to get all the items
      //.query(`
      //  {items}
      //`)
      .query(`
      {
        movie(title: "Fantastic Mr. Fox") {
          title
          director
          writers
          actors
          released
          plot
          poster
          type
          imdb {
            id
            rating
            votes
          }
        }
      }
      `)
      .then(res => res);
  }

  getAll() {
    // get all the items but we clone the content inside the promise
    return this.dataPromise
      .then(items => items.concat([]));
  }
}
