import React, { Component } from "react";

export default class Search extends Component {

  render ()
  {
      return (
        <input
        type="text"
        className="search-field"
        onChange={this.props.handleSearch}
        placeholder="Search for a task!" 
      />
      )
  }
}
