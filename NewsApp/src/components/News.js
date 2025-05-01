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
      totalResults: 0,
    };
  }

  static defaultProps = {
    country: "us",
    pageSize: 16,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  async componentDidMount() {
    document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - NewsMonkey";
    this.fetchNews();
    window.addEventListener("scroll", this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll); 
  }

  fetchNews = async () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${apiKey}`;
    
    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles], // Append new articles
        totalResults: parsedData.totalResults,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1 &&
      !this.state.loading &&
      this.state.articles.length < this.state.totalResults
    ) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        this.fetchNews
      );
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "30px 0px" }}>
          NewsMonkey - Top Headlines From {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}
        </h2>
        {/* Show spinner only when loading and no articles are present */}
        {this.state.loading && this.state.articles.length === 0 && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
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
        {/* Show spinner at the bottom only during infinite scroll */}
        {this.state.loading && this.state.articles.length > 0 && this.state.articles.length < this.state.totalResults && (
          <Spinner />
        )}
      </div>
    );
  }
}

export default News;
