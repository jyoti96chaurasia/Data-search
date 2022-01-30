import React from 'react';

const Search = (props) => {   
  const handleOnChange = (e) => {
    props.handleSearch(e.target.value)
  }

  return (
    <>
      <div className="text-center">
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input onChange={handleOnChange} className="form-control me-2" type="search" placeholder="Search Products" row="8"aria-label="Search"/>
          </form>
        </div>
      </nav>
    </div>
  </>
  )
};

export default Search;
