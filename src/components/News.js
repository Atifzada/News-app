import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import Select from "react-select";

// import Countryddl from "./Country";
// import Countryddl from "./Dropdown";

const News=(props)=> {
  let {category, apiKey, pageSize}= props
  const [country, setCountry] = useState("us");
  const [articles,setArticles] =useState([])
 
  const [page,setPage] =useState(1)
  const [totalResults,setTotalResults] =useState(0)
  
  const CapitalizationFistLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}
    &page=${page}&pageSize=${pageSize}`;
    
    // setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    console.log(country)
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults) 
    // setLoading(false)
    setPage(page+1)
    props.setProgress(100);
  }
  
  useEffect(()=>{
    updateNews();
    document.title = `${CapitalizationFistLetter(category)}-NewsMonkey`;
    // eslint-disable-next-line
  },[country])

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults)
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
    console.log(country)
  };
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "90px 0 30px 0" }}> NewsMonkey - Top {CapitalizationFistLetter(category)} Headlines </h1>
        <div>
        <select value={country} onChange={handleChange}>
        <option value="in">India</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="tr">Turkey</option>
        <option value="fr">France</option>
        <option value="jp">Japan</option>
        <option value="mx">Maxico</option>
        </select>
        {/* <button onClick={handleChange}>Submit</button> */}
</div>
                      <InfiniteScroll
                      dataLength={articles.length}
                      next={fetchMoreData}
                      hasMore={articles.length !== totalResults}
                      loader={<Spinner/>}>

                <div className="container"> 
                  <div className="row"> 
                          {articles.map((element) => {
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
            

News.defaultProps = {
  // country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
