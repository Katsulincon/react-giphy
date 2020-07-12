import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleUpdate(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}


export default SearchBar;
