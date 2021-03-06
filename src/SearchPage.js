import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

import SearchResults from './SearchResults';

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  };

  handleInput = async (e) => {
    await this.setState({ query: e.target.value });
    if (this.state.query.length) {
      BooksAPI.search(this.state.query)
        .then(books => {
          if (books.length) {
            this.setState({ searchResults: books });
          } else {
            this.setState({ searchResults: []})
          }
        })
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { query, searchResults } = this.state;
    const { booksList, updateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input 
              autoFocus
              type="text" 
              value={query}
              placeholder="Search by title or author"
              onChange={this.handleInput} />
          </div>
        </div>
        <SearchResults 
          searchResults={searchResults}
          booksList={booksList}
          updateShelf={updateShelf} />
      </div>
    );
  }
};

export default SearchPage;