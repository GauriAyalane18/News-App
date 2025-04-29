import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: "25rem" }}> 
          <img
            src={imageurl}
            className="card-img-top"
            alt="News"
            style={{ height: "10rem", objectFit: "cover" }} 
          />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "3rem", overflow: "hidden" }}>
              {title}
            </h5>
            <p className="card-text" style={{ height: "5rem", overflow: "hidden" }}>
              {description}
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
