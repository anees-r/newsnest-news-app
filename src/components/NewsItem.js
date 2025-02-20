import React, { Component } from "react";
import dummyImage from "../icons/dummy.jpg";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, articleUrl, date, source } = this.props;
    return (
      <div>
        <div className={`card bg-${this.props.mode} border my-4 mx-2`}>
          <div
            className="container"
            style={{ width: "100%", height: "148px", overflow: "hidden" }}
          >
            <img
              src={imgUrl ? imgUrl : dummyImage}
              style={{ objectFit: "contain" }}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5
              className={`card-title text-${
                this.props.mode === "light" ? "dark" : "light"
              }`}
            >
              {title.length < 40 ? title : title.slice(0, 40) + "..."}
            </h5>
            <p
              className={`card-text text-${
                this.props.mode === "light" ? "dark" : "light"
              }`}
            >
              {description.length < 80
                ? description
                : description.slice(0, 80) + "..."}
            </p>

            <span className="badge text-bg-danger">{source}</span>

            <p
              className={`card-text text-${
                this.props.mode === "light" ? "dark" : "light"
              }`}
            >
              {date}
            </p>
            <a
              href={articleUrl}
              target="_blank"
              rel="noreferrer"
              className="btn  btn-danger btn-sm"
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
