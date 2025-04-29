import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1, // Initialize page state
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const apiKey = "149779a493904e4aa109789f8d912289";
    const url = `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&pageSize=20&apiKey=${apiKey}`;
    this.setState({ loading: true }); // Set loading to true while fetching data
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false, // Set loading to false after data is fetched
    });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }), // Decrement the page state
      this.fetchNews // Fetch news after updating the page state
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }), // Increment the page state
      this.fetchNews // Fetch news after updating the page state
    );
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "No Title"}
                  description={element.description ? element.description : "No Description"}
                  imageurl={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1 || this.state.loading} // Disable if on the first page or loading
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={this.state.loading} // Disable if loading
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
