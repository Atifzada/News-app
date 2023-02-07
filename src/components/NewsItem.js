import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: '18rem'}}>
        
          <img
            src={!imageUrl? "https://i.ytimg.com/vi/dGQqBmGeT1g/maxresdefault.jpg": imageUrl}className="card-img-top"alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target={"_blank"} className="btn btn-sm btn-primary">Details</a>
            <p class="card-text"><small class="text-muted">by {author? author :"Unknown"} on {new Date(date).toGMTString()}</small></p>
            Source:<span className="position-absolute top-0 translate-middle badge rounded-pill " style={{ marginTop:'5px', marginLeft:'5px'}}>
          {source}
          </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
