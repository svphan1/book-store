import React, { Component } from 'react';
import './App.css';
import BookList from './Components/BookList';
import SearchBar from './Components/SearchBar';
import CheckOut from './Components/CheckOut';

class App extends Component {

  state = {
    books: [],
    emptyCart: [],
    total: [],
    search: ''
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const booksTitle = await response.json()
    this.setState({ books: booksTitle })
  }

  addToCart = (e) => {
    let updatedCart = this.state.books.filter(book => book.title === e.target.value)
    this.setState({ emptyCart: this.state.emptyCart.concat(updatedCart) })
    this.getTotal()
    console.log('current cart', this.state.emptyCart)
  }

  removeFromCart = (index) => {
    const currentCart = this.state.emptyCart
    console.log('bookie', currentCart)
    currentCart.splice(index, 1);
    this.setState({currentCart: currentCart});
  }

  getTotal = () => {
    return this.state.emptyCart.length * 5
  }

  clearSearch = () => {
    window.location.reload();
  }

  filterTitle = () => {
    this.setState({
      books: this.state.books.sort(function (a, b) {
        let nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
      })
    })
  }

  filterAuthor = () => {
    this.setState({
      books: this.state.books.sort(function (a, b) {
        let nameA = a.author.toLowerCase(),
          nameB = b.author.toLowerCase();
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
      })
    })
  }

  updateSearch = (e) => {
    let newValue = e.target.value
    console.log(newValue)
    // this.setState({state: e.target.value})
  }

  render() {
    return (
      <div>
        <SearchBar
          filterTitle={this.filterTitle}
          filterAuthor={this.filterAuthor}
          searchFilter={this.state.search}
          updateSearch={this.updateSearch}
          clearSearch={this.clearSearch} />
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
              getTotal={this.getTotal}
              removeFromCart={this.removeFromCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
