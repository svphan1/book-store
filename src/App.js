import React, { Component } from "react";
import "./App.css";
import BookList from "./Components/BookList";
import SearchBar from "./Components/SearchBar";
import CheckOut from "./Components/CheckOut";

class App extends Component {
  state = {
    books: [
      {
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        description:
          "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        price: 9.95
      },
      {
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        description:
          "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        price: 9.95
      },
      {
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        description:
          "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        price: 9.95
      },
      {
        title: "Programming JavaScript Applications",
        subtitle:
          "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        description:
          "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
        price: 9.95
      },
      {
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        description:
          "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        price: 9.95
      },
      {
        title: "You Don't Know JS",
        subtitle: "ES6 & Beyond",
        author: "Kyle Simpson",
        description:
          'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
        price: 9.95
      },
      {
        title: "Git Pocket Guide",
        subtitle: "A Working Introduction",
        author: "Richard E. Silverman",
        description:
          "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
        price: 9.95
      },
      {
        title: "Designing Evolvable Web APIs with ASP.NET",
        subtitle: "Harnessing the Power of the Web",
        author: "Glenn Block, et al.",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      },
      {
        title: "Secrets",
        subtitle: "of The JavaScript Ninja",
        author: "John Resig",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      },
      {
        title: "Beginning JavsScript",
        subtitle: "A JavaScript Book for Complete Noobs",
        author: "Axel Rauschmayer",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      },
      {
        title: "Effective JavaScript",
        subtitle: "68 Specific Ways to Harness the Power of JavaScript ",
        author: "Glenn Block, et al.",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      },
      {
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Glenn Block, et al.",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      },
      {
        title: "You Don't Know JS",
        subtitle: "Async & Performance",
        author: "Glenn Block, et al.",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      },
      {
        title: "JavaScript",
        subtitle: "The Good Parts",
        author: "Glenn Block, et al.",
        description:
          "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        price: 9.95
      }
    ],
    // books: [],
    cart: [],
    search: ""
  };

  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8082/api/books');
  //   const booksTitle = await response.json()
  //   this.setState({ books: booksTitle })
  // }

  addToCart = e => {
    let updatedCart = this.state.books.filter(
      book => book.title === e.target.value
    );
    this.setState({ cart: this.state.cart.concat(updatedCart) });
    this.getTotal();
  };

  removeFromCart = index => {
    const currentCart = this.state.cart;
    currentCart.splice(index, 1);
    this.setState({ currentCart: currentCart });
  };

  getTotal = () => {
    let total = this.state.cart.length * 9.95;
    return total.toFixed(2);
  };

  clearCart = () => {
    window.location.reload();
  };

  filterTitle = () => {
    this.setState({
      books: this.state.books.sort(function(a, b) {
        let nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      })
    });
  };

  filterAuthor = () => {
    this.setState({
      books: this.state.books.sort(function(a, b) {
        let nameA = a.author.toLowerCase(),
          nameB = b.author.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      })
    });
  };

  searchHandler = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filteredBooks = this.state.books.filter(book => {
      return (
        book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <React.Fragment>
        <SearchBar
          filterTitle={this.filterTitle}
          filterAuthor={this.filterAuthor}
          searchFilter={this.state.search}
          searchHandler={this.searchHandler}
          clearCart={this.clearCart}
          search={this.state.search}
        />
        <div className="container">
          <div className="books">
            <h3>Books</h3>
            <BookList
              bookNames={this.state.books}
              addToCart={this.addToCart}
              filteredBooks={filteredBooks}
            />
          </div>
          <div className="cart">
            <CheckOut
              cartItems={this.state.cart}
              getTotal={this.getTotal}
              removeFromCart={this.removeFromCart}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
