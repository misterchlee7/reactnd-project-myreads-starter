import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

class BooksListPage extends Component {
  state = {
    'Currently Reading': [],
    'Want to Read': [],
    'Read': []
  };

  async componentDidMount() {
    const { booksList } = this.props;
    const currentlyReading = [];
    const wantToRead = [];
    const read = [];
    for (let b of booksList) {
      switch(b.shelf) {
        case 'currentlyReading':
          currentlyReading.push(b);
          break;
        case 'wantToRead':
          wantToRead.push(b);
          break;
        case 'read':
          read.push(b);
          break;
        default:
          console.log('Error in assigning to bookshelf')
      }
    }
    await this.setState({
      'Currently Reading': currentlyReading,
      'Want to Read': wantToRead,
      'Read': read
    })
  }

  render() {
    const shelves = Object.keys(this.state).map( (category, i) => {
      const booksOfCategory = [...this.state[category]];
      return (
        <BookShelf
          key={i}
          shelfTitle={category}
          booksList={booksOfCategory} />)
    });

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