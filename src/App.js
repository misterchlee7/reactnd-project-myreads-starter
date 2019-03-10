import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';

import BooksListPage from './BooksListPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books }, () => console.log('APP: book initial state set', this.state.books))
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route 
          exact path='/'
          render={() => (
            <BooksListPage
              booksList={books} />
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
