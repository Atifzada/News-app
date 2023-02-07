import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  
  CapitalizationFistLetter=(string)=> {
     return string.charAt(0).toUpperCase() + string.slice(1);
   }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.CapitalizationFistLetter(this.props.category)}-NewsMonkey`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f39102931a74e3c94ecd61499ec5fd3
               &page=${this.state.page}&pageSize=${this.props.pageSize}`;

      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
                      articles: parsedData.articles,
                      totalResults: parsedData.totalResults,
                      loading: false,
                                       });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "25px" }}>
          NewsMonkey - Top {this.CapitalizationFistLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row"> {!this.state.loading && this.state.articles.map((element) => {
              return (
                   <div className="col-md-4" key={element.url}>
                   <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description? element.description.slice(0, 88): ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button" className="btn btn-dark" onClick={this.handleNextClick} > Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
