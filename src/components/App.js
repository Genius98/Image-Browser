import React from "react";
import unsplash from "../api/unsplash"; //to make request over to the unsplash API
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] }; //initialize state with image property & set it to empty array

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      //specifying first parameter where we want to make a get request
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* onsearchsubmit function will run each time the search bar is submitted */}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
