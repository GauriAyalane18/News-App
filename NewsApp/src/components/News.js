import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner'; 
import propTypes from 'prop-types'; 
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1, 
    };
  }
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const apiKey = "149779a493904e4aa109789f8d912289";
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${apiKey}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }), 
      this.fetchNews 
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }), 
      this.fetchNews 
    );
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "30px 0px"}}>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />} {/* Show spinner when loading */}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "No Title"}
                    description={element.description ? element.description : "No Description"}
                    imageurl={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
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
