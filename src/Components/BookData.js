import React from 'react'

const BookData = ( {bookNames} ) => {
  const titles = (filteredBooks) => {
    return filteredBooks.map((book, id) => {
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
    <div>
      <section>{titles(bookNames)} </section>
    </div>
  )
}

export default BookData;
