import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, publishedAt } = props;
  return (
    <div>
      <div className="max-w-sm  bg-white border h-[490px] border-gray-200 rounded-lg shadow-slate-600 shadow-2xl dark:bg-gray-800 dark:border-gray-700 relative">
        <a href={newsurl} target="_blank">
          <img
            className="rounded-t-lg h-44 w-full object-cover object-center "
            src={imageurl}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href={newsurl} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            By {author} on {new Date(publishedAt).toGMTString()}
          </p>
        </div>
        <a
          href={newsurl}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-4 left-4"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
