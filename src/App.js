import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';

import SearchPage from './SearchPage';
import BooksListPage from './BooksListPage';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: {
      'Currently Reading': [],
      'Want to Read': [],
      'Read': []
    }
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .then(() => {console.log(this.state.books)});
  }

  render() {
    const { shelves } = this.state;

    return (
      <div className="app">
        <Route 
          exact path='/'
          render={() => (
            <BooksListPage
              shelves={shelves} />
          )} />
        <Route 
        path='/search'
        render={() => (
          <SearchPage /> 
        )} />  
      </div>
    )
  }
}

export default BooksApp
