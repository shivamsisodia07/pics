import React, { Component } from "react";
import "./searchBar.css";

class searchBar extends React.Component {
  state = {
    term: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search_section'>
        <form className='ui form' onSubmit={this.onSubmit}>
          <div
            className='ui feild'
            style={{
              justifyItems: "center",
              alignItems: "center",
            }}>
            {/* logo */}
            <div className='ui fluid icon input'>
              <input
                type='text'
                placeholder='Search...'
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <button class='glow-on-hover' type='submit'>
                Search
              </button>
              {/* <button type='submit'>Search</button> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default searchBar;
