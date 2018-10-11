import React from 'react';

const BookList = ({ bookNames, addToCart}) => {
  const titles = (json) => {
    return json.map((book, id) => {
      return (
        <button onClick= {addToCart} key={id} value= {book.title} className="books2 list-group-item list-group-item-action">
          Title: {book.title} <br />
          Subtitle: {book.subtitle} <br />
          Author: {book.author} <br />
          Price: ${book.price}
        </button>
      )
    })
  }
  return (
    <section>{titles(bookNames)} </section>
  )
}

export default BookList;
