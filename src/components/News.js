import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  query = "",
  title = "NewsNest - Home",
  category,
  setNewProgress,
  pageSize,
  mode,
  welcomePage = false,
}) => {
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    await setPage(page + 1);
    setNewProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?category=${category}${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setNewProgress(60);
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    setNewProgress(100);
  };

  const fetchNewData = async () => {
    await setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?category=${category}${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    fetchData();
    document.title = title;
  }, []);

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  return (
    <>
      <div className="container">
        <h4
          className={` text-${mode === "light" ? "dark" : "light"}`}
          style={{ marginTop: "90px" }}
        >
          {category === "general"
            ? "Top-Headlines"
            : `Top-${capitalize(category)}-Headlines`}
        </h4>

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchNewData}
          hasMore={articles.length !== totalResults}
          loader={!welcomePage && <Loader mode={mode} />}
        >
          <div className="container" style={{ borderRadius: 20 }}>
            <div className="row">
              {loading && <Loader mode={mode} />}
              {!loading &&
                articles.map((element) => {
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
                        mode={mode}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
export default News;
