import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const apiKey = "149779a493904e4aa109789f8d912289";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

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
      </div>
    );
  }
}

export default News;
