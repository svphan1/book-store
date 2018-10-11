import React, { Component } from 'react';
import './App.css';
import BookList from './Components/BookList';
import SearchBar from './Components/SearchBar';
import CheckOut from './Components/CheckOut';

class App extends Component {

  state = {
    books: [],
    emptyCart: [],
    total: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const booksTitle = await response.json()
    this.setState({ books: booksTitle })
  }

  addToCart = (e) => {
    let updatedCart = this.state.books.filter(book => book.title === e.target.value)
    this.setState({ emptyCart: this.state.emptyCart.concat(updatedCart) })
    console.log('length',this.state.emptyCart.length)
    this.getTotal()
  }

  getTotal = () => {
    return this.state.emptyCart.length * 5
  }

  filterTitle = () => {
    let filtered = this.state.books.title
    console.log('filter', filtered)
  }

  render() {
    return (
      <div>
        <SearchBar 
        filterTitle={this.filterTitle}/>
        <div className="contain">
          <div className="books">
            <h3>Books</h3>
            <BookList 
            bookNames={this.state.books}
            addToCart={this.addToCart} />
          </div>
          <div className="cart">
            <CheckOut 
            cartItems={this.state.emptyCart}
            getTotal={this.getTotal}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
