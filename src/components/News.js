import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      totalResults :0,
    };
    document.title = `${this.CapitalizationFistLetter(this.props.category)}-NewsMonkey`;
  }
  async updateNews() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}
               &page=${this.state.page}&pageSize=${this.props.pageSize}`;

      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(60);
      console.log(parsedData)
      // console.log(process.env.REACT_APP_APIKEY)
      this.setState({
                      articles: parsedData.articles,
                      totalResults: parsedData.totalResults,
                      loading: false,
                      page:this.state.page+1,
                                       });
       this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {  
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "25px" }}> NewsMonkey - Top {this.CapitalizationFistLetter(this.props.category)} Headlines </h1>


                      <InfiniteScroll
                      dataLength={this.state.articles.length}
                      next={this.fetchMoreData}
                      hasMore={this.state.articles.length !== this.state.totalResults}
                      loader={<Spinner/>}>

                <div className="container">
                 
                  <div className="row"> 
                          {this.state.articles.map((element) => {
                          return <div className="col-md-4" key={element.url}>
                          <NewsItem
                          title={element.title ? element.title.slice(0, 45) : ""}
                          description={element.description? element.description.slice(0, 88): ""}
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}/>
                </div>
              })}
              </div>
              </div>

                </InfiniteScroll>
      </div>
    );
  }
}

export default News;
