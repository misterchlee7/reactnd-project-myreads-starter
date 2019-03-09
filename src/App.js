import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './SearchPage';
import BooksListPage from './BooksListPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  toggleSearchPage = () => {
    let searchPageToggle = !this.state.showSearchPage;
    this.setState({ showSearchPage: searchPageToggle });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage 
          ? <SearchPage toggleSearchPage={this.toggleSearchPage} /> 
          : <BooksListPage toggleSearchPage={this.toggleSearchPage} />}
      </div>
    )
  }
}

export default BooksApp
