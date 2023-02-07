import React, { Component } from "react";
// import News from "./News";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
    article: []
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value,
      searchResults: this.state.article.filter(item =>
        item.description.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  };

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        {this.state.searchResults.length > 0 ? (
          <ul>
            {this.state.searchResults.map(article =>(<li key={article.description}>{article.description}</li>))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  }
}

export default SearchBar;
