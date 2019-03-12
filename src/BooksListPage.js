import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

const BooksListPage = ({ booksList, updateShelf }) => {
  const shelfNames = {
    'Currently Reading': 'currentlyReading',
    'Want to Read': 'wantToRead',
    'Read': 'read'
  };
  
  const shelves = Object.keys(shelfNames).map(
    (shelf, i) => {
      const booksInShelves = booksList.filter(
        book => book.shelf === shelfNames[shelf]
      )
      return (
        <BookShelf
          key={i}
          shelfTitle={shelf}
          booksList={booksInShelves}
          updateShelf={updateShelf} />
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

export default BooksListPage;