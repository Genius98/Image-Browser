import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); //this will prevent the auto refresh after user press enter

    this.props.onSubmit(this.state.term); //referencing the function(onsubmitsearch) in app.js
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* /* when any event occurs oninputchange will be called*/}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
