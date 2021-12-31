import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";

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
      <div
        className='ui segment'
        style={{
          marginTop: "10px",
        }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        found: {this.state.images.length} imgaes
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
