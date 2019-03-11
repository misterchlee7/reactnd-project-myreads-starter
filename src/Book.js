import React, { Component } from 'react';

class Book extends Component {
  state = {
    selectValue: this.props.currentShelf
  };

  handleOptionSelect = async (e) => {
    await this.setState({ selectValue: e.target.value });
    this.props.updateShelf(this.props.id, this.state.selectValue);
  }

  render() {
    const { title, author, bookImage } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
            <div className="book-shelf-changer">
              <select
                value={this.state.selectValue}
                onChange={this.handleOptionSelect}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

export default Book;