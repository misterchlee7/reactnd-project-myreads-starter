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

  componentDidMount() {
    console.log('APP: didMount')
    this.getAllBooks();
  }
  
  getAllBooks = () => {
    BooksAPI.
      getAll()
      .then((books) => {
        this.setState({ books }, () => {
          console.log('bookshelf state',this.state);
        })
    })
  }

  updateShelf = async (bookId, shelf) => {
    const book = await BooksAPI.get(bookId);
    await BooksAPI.update(book, shelf);
    this.getAllBooks();
  };

  render() {
    console.log('APP: render')
    const { books } = this.state;

    return (
      <div className="app">
        <Route 
          exact path='/'
          render={() => (
            <BooksListPage
              booksList={books}
              updateShelf={this.updateShelf} />
          )} />
        <Route 
        path='/search'
        render={() => (
          <SearchPage
            booksList={books}
            updateShelf={this.updateShelf} /> 
        )} />  
      </div>
    )
  }
}

export default BooksApp
