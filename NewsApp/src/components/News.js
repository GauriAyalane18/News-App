import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          url: "https://www.vice.com/en/article/do-you-experience-sunshine-guilt/",
          title: "Do You Experience Sunshine Guilt?",
          description: "Have you ever felt guilty for staying indoors on a warm, sunny day? Then you might have fallen victim to 'sunshine guilt.'",
          imageurl: "https://www.vice.com/wp-content/uploads/sites/2/2025/04/do-you-experience-sunshine-guilt.jpg?w=1024",
        },
        {
          url: "https://pagesix.com/2025/04/16/celebrity-news/lisa-vanderpump-finally-says-she-cant-support-james-kennedy-after-arrest/",
          title: "Lisa Vanderpump finally says she ‘can’t support’ James Kennedy after domestic violence arrest",
          description: "Lisa Vanderpump has finally spoken out about James Kennedy's arrest, saying she 'can’t support' him anymore.",
          imageurl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1D30m8.img?w=768&h=512&m=6&x=663&y=123&s=66&d=66", // Replaced with a valid image URL
        },
        {
          url: "https://www.bbc.com/news/world-asia-56789012",
          title: "Major Earthquake Strikes Southeast Asia",
          description: "A major earthquake has struck Southeast Asia, causing widespread damage and panic in the region.",
          imageurl: "https://th.bing.com/th/id/OIP.Br0hqcm2t7F40WQIn4PYRwHaHI?w=160&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", // Verified URL
        },
        {
          url: "https://www.cnn.com/2025/04/16/tech/ai-breakthrough/index.html",
          title: "AI Breakthrough Promises to Revolutionize Healthcare",
          description: "A new AI breakthrough is set to revolutionize the healthcare industry, offering faster and more accurate diagnoses.",
          imageurl: "https://assets-global.website-files.com/650c1bee516c4e723b11b29a/656e635ea9984a7f79201d91_1693830639285.png", 
        },
        {
          url: "https://www.nytimes.com/2025/04/16/science/space-exploration.html",
          title: "Space Exploration: New Horizons for Humanity",
          description: "NASA announces a new mission to explore the outer reaches of our solar system, aiming to uncover the secrets of the universe.",
          imageurl: "https://th.bing.com/th/id/OIP.YnP-0tlETA9Vov_YhDf3mwAAAA?rs=1&pid=ImgDetMain",
        },
      ],
    };
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
                  title={element.title}
                  description={element.description}
                  imageurl={element.imageurl}
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
