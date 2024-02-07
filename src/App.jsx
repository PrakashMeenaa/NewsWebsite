import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React, { Component } from "react";
import NewsComponent   from "./Components/NewsComponent";
import Header from "./Components/Header";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <LoadingBar color="Orange" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/Home"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="general"
                  pageSize={5}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="business"
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              exact
              path="/health"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent setProgress={this.setProgress} 
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
