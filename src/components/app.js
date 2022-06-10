import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";
import Logo from "./logo";
import "./app.css";
class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const Response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: Response.data.results });
  };

  render() {
    return (
      <div className='container'>
        <Logo></Logo>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <h4>found: {this.state.images.length} images</h4>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
