import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
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
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">Source: {source ? source : "Unknown"}</small>
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
