import React, { Component, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [articleCount, setarticleCount] = useState(0);

  document.title = `P News - ${props.category}`;

  let update = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d758c8cb2763436196f32c4a46ea19f7&page=${page}&pageSize=${props.pageSize}}`;
    props.setprogress(50);
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setprogress(100);
    setarticle(parsedData.articles);
    setarticleCount(parsedData.totalResults);
    setloading(false);
  };
  useEffect(() => {
    update();
    setpage(2);
  }, []);

  let fetchData = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d758c8cb2763436196f32c4a46ea19f7&page=${page}&pageSize=${props.pageSize}}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticle(article.concat(parsedData.articles));
    setarticleCount(parsedData.totalResults);
    setloading(false);

    console.log(`${article.length}`);
    console.log(`${articleCount}`);
  };
  // handleNextClick = async () => {setState({page: page + 1,});update();};

  // handlePrevClick = async () => {setState({page: page - 1,});update();};

  return (
    <div>
      <h2 className="p-4 text-3xl bg-slate-400 mb-2 text-center">
        News Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchData}
        hasMore={page <= Math.ceil(articleCount / 20)}
        loader={<Spinner />}
      >
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-y-10 gap-x-10 p-10">
          {article.map((Element, index) => {
            return (
              <div key={index}>
                <NewsItem
                  title={Element.title}
                  description={Element.description}
                  imageurl={
                    Element.urlToImage ||
                    "https://www.hindustantimes.com/ht-img/img/2024/02/04/550x309/402fb792-2866-11ed-9b13-2e13773bcef4_1661865739731_1707057396673.jpg"
                  }
                  author={Element.author}
                  publishedAt={Element.publishedAt}
                  newsurl={Element.url}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className=" flex justify-between p-10">
          <button className="p-3 bg-black text-white disabled:bg-gray-500 "
            disabled={page <= 1}
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            className="p-3 px-6 bg-black text-white disabled:bg-gray-500"
            disabled={
              page + 1 > Math.ceil(articleCount / 20)
            }
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};
NewsComponent.defaultProps = {
  pageSize: 70,
  country: "in",
  category: "general",
};
NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default NewsComponent;
