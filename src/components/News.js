import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsItemPlaceholder from "./NewsItemPlaceholder";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div>
        <div className="container mt-y3">
          <h1 className="text-center mt-3">NewsNest Headlines!</h1>
          <div className="row">
            {this.state.loading && (
              <div>
                <div className="row">
                  <div className="col-md-3 my-2">
                    <NewsItemPlaceholder />
                  </div>
                  <div className="col-md-3 my-2">
                    <NewsItemPlaceholder />
                  </div>
                  <div className="col-md-3 my-2">
                    <NewsItemPlaceholder />
                  </div>
                  <div className="col-md-3 my-2">
                    <NewsItemPlaceholder />
                  </div>
                </div>
                <div className="row mt-5 justify-content-center">
                  <div className="spinner-border text-dark" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              </div>
            )}
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "Title Unavailable"}
                    description={
                      element.description
                        ? element.description
                        : "Description Unavailable"
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "../icons/dummy.jpg"
                    }
                    articleUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
