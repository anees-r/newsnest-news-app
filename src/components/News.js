import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsItemPlaceholder from "./NewsItemPlaceholder";
import NextIcon from "../icons/next-icon.png";
import PrevIcon from "../icons/prev-icon.png";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      articles: [],
      loading: true,
      page: 1,
    };
  }

  static defaultProps = {
    query: "",
    title: "NewsNest - Home",
  };

  fetchData = async (navigate) => {
    // the buttons were not navigating properly so i had to add await so it sets new page number first and then fetches it
    // await this.setState({
    //   page: this.state.page + navigate,
    // });
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}${this.props.query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   loading: false,
    //   totalResults: parsedData.totalResults,
    // });
  };

  async componentDidMount() {
    await this.fetchData(0);
    document.title = this.props.title;
  }

  onNextPage = async () => {
    await this.setState({
      loading: true,
    });
    this.fetchData(1);
    // document.documentElement.scrollTop = 0;
  };
  onPrevPage = async () => {
    await this.setState({
      loading: true,
    });
    this.fetchData(-1);
    // document.documentElement.scrollTop = 0;
  };

  capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  render() {
    return (
      <>
        <div className="container">
          <h4
            className={`mb-3 mt-2 text-${
              this.props.mode === "light" ? "dark" : "light"
            }`}
          >
            {this.props.category === "general"
              ? "Top-Headlines"
              : `Top-${this.capitalize(this.props.category)}-Headlines`}
          </h4>
          <div className="container border mb-5" style={{ borderRadius: 20 }}>
            <div className="row">
              {this.state.loading && (
                <div>
                  <div className="row">
                    <div className="col-md-3 my-2">
                      <NewsItemPlaceholder mode={this.props.mode} />
                    </div>
                    <div className="col-md-3 my-2">
                      <NewsItemPlaceholder mode={this.props.mode} />
                    </div>
                    <div className="col-md-3 my-2">
                      <NewsItemPlaceholder mode={this.props.mode} />
                    </div>
                    <div className="col-md-3 my-2">
                      <NewsItemPlaceholder mode={this.props.mode} />
                    </div>
                  </div>
                  {/* <div className="row mt-5 justify-content-center">
                    <div className="spinner-border text-dark" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div> */}
                </div>
              )}
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3 my-2" key={element.url}>
                      <NewsItem
                        title={
                          element.title ? element.title : "Title Unavailable!"
                        }
                        description={
                          element.description
                            ? element.description
                            : "Description Unavailable!"
                        }
                        imgUrl={element.urlToImage}
                        articleUrl={element.url ? element.url : ""}
                        date={new Date(element.publishedAt).toGMTString()}
                        source={element.source.name}
                        mode={this.props.mode}
                      />
                    </div>
                  );
                })}
            </div>

            <div className="d-flex justify-content-between mx-2 mb-4">
              <button
                type="button"
                style={{
                  width: "100px",
                }}
                disabled={this.state.page <= 1}
                onClick={this.onPrevPage}
                className="btn  btn-danger"
              >
                <img
                  src={PrevIcon}
                  alt="Previous"
                  style={{
                    height: "25px",
                  }}
                />
              </button>
              <button
                type="button"
                style={{
                  width: "100px",
                }}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.onNextPage}
                className="btn  btn-danger"
              >
                <img
                  src={NextIcon}
                  alt="Next"
                  style={{
                    height: "25px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
