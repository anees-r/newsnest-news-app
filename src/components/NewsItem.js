import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, articleUrl } = this.props;
    return (
      <div>
        <div className="card my-4 mx-2" style={{ width: "18rem" }}>
          <div
            className="container"
            style={{ width: "288px", height: "148px", overflow: "hidden" }}
          >
            <img
              src={imgUrl}
              style={{ objectFit: "contain" }}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {title.length < 40 ? title : title.slice(0, 40) + "..."}
            </h5>
            <p className="card-text">
              {description.length < 80
                ? description
                : description.slice(0, 80) + "..."}
            </p>
            <a
              href={articleUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
              style={{ width: "100%" }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
