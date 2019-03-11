import React from 'react';

import Book from './Book';

const SearchResults = ({ searchResults, booksList, updateShelf }) => {
  const books = searchResults.length
    ? searchResults.map(book => {
        const bookImg = book.imageLinks 
          ? book.imageLinks.thumbnail 
          : 'https://rcmllp.com/wp-content/uploads/2017/11/no-photo.jpg'
        let bookShelf = 'none';
        for (let b of booksList) {
          if (book.id === b.id) {
            bookShelf = b.shelf;
            break;
          }
        }
        
        return (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.authors}
            bookImage={bookImg}
            currentShelf={bookShelf}
            updateShelf={updateShelf} />
        )})
    : <p>No search results</p>;

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books}
      </ol>
    </div>
  );
};

export default SearchResults;