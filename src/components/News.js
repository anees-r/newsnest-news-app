import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsItemPlaceholder from "./NewsItemPlaceholder";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      articles: [],
      loading: true,
      page: 1,
      maxPages: 0,
    };
  }

  fetchData = async (navigate) => {
    // this.setState({
    //   page: this.state.page + navigate,
    // });
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=20`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   loading: false,
    //   totalResults: parsedData.totalResults,
    // });
  };

  componentDidMount() {
    this.fetchData(0);
    this.setState({
      maxPages: Math.ceil(this.state.totalResults / 20),
    });
  }

  onNextPage = () => {
    if (this.state.page + 1 > this.state.maxPages) {
      // if there is no next page
    } else {
      this.state.loading = true;
      this.fetchData(1);
    }
  };
  onPrevPage = () => {
    this.state.loading = true;
    this.fetchData(-1);
  };

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
          <div className="d-flex justify-content-between mx-2">
            <button
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.onPrevPage}
              className="btn btn-primary"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={this.state.page + 1 > this.state.maxPages}
              onClick={this.onNextPage}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
