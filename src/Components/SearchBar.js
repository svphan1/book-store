import React from 'react';

const SearchBar = ({filterTitle}) => { 
  return(
    <nav className="navbar navbar-dark bg-success sticky-top navbar-expand-lg mb-4 ">
    <a className="navbar-brand" href="#">JS Book Store</a>

    {/* <!-- Collapse button --> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

    {/* <!-- Collapsible content --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        {/* <!-- Links --> */}
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" onClick={filterTitle}>Filter by Title </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Filter by Author</a>
            </li>
        </ul>

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Filter by Search</a>
            </li>
                <input type="text" placeholder="Search" aria-label="Search"/>
        </ul>

    </div>
</nav>
  )
}

export default SearchBar;