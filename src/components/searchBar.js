import React, { Component } from "react";

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
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onSubmit}>
          <div
            className='ui feild'
            style={{
              justifyItems: "center",
              alignItems: "center",
            }}>
            <label> Image Search</label>{" "}
            <input
              type='text'
              placeholder='Enter something'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button
              type='submit'
              style={{
                marginTop: "10px",
              }}>
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default searchBar;
