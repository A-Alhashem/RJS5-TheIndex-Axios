import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let book = this.props.book;
    // let author = this.props.author;
    const authors = book.authors.map(author => (
      <div className="row">{author.name}</div>
    ));

    console.log(book);
    return (
      <tr>
        <td>{book.title}</td>
        <td>{authors}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
