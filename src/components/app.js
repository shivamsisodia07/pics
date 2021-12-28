import React from "react";
import SearchBar from "./searchBar";
import ImgSection from "./img";

const App = () => {
  return (
    <div
      className='ui segment'
      style={{
        marginTop: "10px",
      }}>
      <SearchBar></SearchBar>
    </div>
  );
};

export default App;
