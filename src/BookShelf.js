import React, { Component } from 'react';

import Book from './Book';

class BookShelf extends Component {
  render() {
    const { shelfTitle, booksList, updateShelf } = this.props;
    const books = booksList.map(book => {
      const bookImg = book.imageLinks ? book.imageLinks.thumbnail : 'https://rcmllp.com/wp-content/uploads/2017/11/no-photo.jpg';
      return (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          bookImage={bookImg}
          currentShelf={book.shelf}
          updateShelf={updateShelf} />
    )})

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    );
  }
};

export default BookShelf;