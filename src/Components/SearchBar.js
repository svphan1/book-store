import React from 'react';

const SearchBar = ({filterTitle, filterAuthor, clearCart, searchHandler, search }) => { 
  return(
    <nav className="navbar navbar-dark bg-success sticky-top navbar-expand-lg mb-4 ">
    <a className="navbar-brand" href="#">JS Book Store</a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" onClick={clearCart} href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={filterTitle} href="#" >Filter by Title </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={filterAuthor} href="#">Filter by Author</a>
            </li>
        </ul>

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Filter by Search</a>
            </li>
                <input value={search} onChange={searchHandler} type="text" placeholder="Search"/>
        </ul>
    </div>
</nav>
  )
}

export default SearchBar;