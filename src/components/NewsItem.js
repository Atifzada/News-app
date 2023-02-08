
const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0',
        }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img
            src={!imageUrl? "https://i.ytimg.com/vi/dGQqBmGeT1g/maxresdefault.jpg": imageUrl}className="card-img-top"alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target={"_blank"} className="btn btn-sm btn-primary">Details</a>
            <p className="card-text"><small className="text-muted">by {author? author :"Unknown"} on {new Date(date).toGMTString()}</small></p>
            {/* Source:<span className="position-absolute top-0 translate-middle badge rounded-pill"  style={{ marginTop:'5px', marginLeft:'5px', color: "red"}}>
            {source}
            </span> */}
            </div>
         </div>
      </div>
    );
  }


export default NewsItem;
