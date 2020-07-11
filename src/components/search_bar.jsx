import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <input type="text" className="form-control form-search" />
    );
  }
}


export default SearchBar;
