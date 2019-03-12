import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

class BooksListPage extends Component {
  state = {
    'Currently Reading': 'currentlyReading',
    'Want to Read': 'wantToRead',
    'Read': 'read'
  };
  
  render() {
    const shelves = Object.keys(this.state).map(
      (shelf, i) => {
        const booksInShelves = this.props.booksList.filter(
          book => book.shelf === this.state[shelf]
        )
        return (
          <BookShelf
            key={i}
            shelfTitle={shelf}
            booksList={booksInShelves}
            updateShelf={this.props.updateShelf} />
        );
      }
    );

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            <button>Add a Book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksListPage;