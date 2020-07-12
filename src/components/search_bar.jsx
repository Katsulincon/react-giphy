import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}


export default SearchBar;
