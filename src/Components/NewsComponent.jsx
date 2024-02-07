import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Prototype from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  static defaultProps = {
    pageSize:70,
    country: "in",
    category: "general",
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      articleCount:0 ,
    };
    document.title = `P News - ${this.props.category}`;
  }

  update = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d758c8cb2763436196f32c4a46ea19f7&page=${this.state.page}&pageSize=${this.props.pageSize}}`;
    this.props.setProgress(50);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(100);
    this.setState({
      article: parsedData.articles,
      articleCount: parsedData.totalResults,
      loading: false
    });
  };

  async componentDidMount() {
    this.update();
  }
  fetchData = async () => {
    
    this.setState({ page:++this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d758c8cb2763436196f32c4a46ea19f7&page=${this.state.page}&pageSize=${this.props.pageSize}}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      articleCount: parsedData.totalResults,
      loading: false
      
    });
    console.log(`${this.state.article.length}`);
    console.log(`${this.state.articleCount}`);
  };
  // handleNextClick = async () => {this.setState({page: this.state.page + 1,});this.update();};

  // handlePrevClick = async () => {this.setState({page: this.state.page - 1,});this.update();};

  render() {
    return (
      <div>
        <h2 className="p-4 text-3xl bg-slate-400 mb-2 text-center">
          News Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchData}
          hasMore={this.state.article.length !== this.state.articleCount}
          loader={<Spinner />}
          
        >
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-y-10 gap-x-10 p-10">
            {this.state.article.map((Element, index) => {
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
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            className="p-3 px-6 bg-black text-white disabled:bg-gray-500"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.articleCount / 20)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default NewsComponent;
