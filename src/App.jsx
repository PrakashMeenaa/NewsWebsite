import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import NewsComponent from "./Components/NewsComponent";
import Header from "./Components/Header";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setprogress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <LoadingBar color="Orange" progress={progress} />
        <Routes>
          <Route
            exact
            path="/Home"
            element={
              <NewsComponent
                setprogress={setprogress}
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
              <NewsComponent
                setprogress={setprogress}
                key="business"
                pageSize={5}
                country="in"
                category="Business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponent
                setprogress={setprogress}
                key="entertainment"
                pageSize={5}
                country="in"
                category="Entertainment"
              />
            }
          ></Route>

          <Route
            exact
            path="/health"
            element={
              <NewsComponent
                setprogress={setprogress}
                key="health"
                pageSize={5}
                country="in"
                category="Health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <NewsComponent
                setprogress={setprogress}
                key="science"
                pageSize={5}
                country="in"
                category="Science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <NewsComponent
                setprogress={setprogress}
                key="sports"
                pageSize={5}
                country="in"
                category="Sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <NewsComponent
                setprogress={setprogress}
                key="technology"
                pageSize={5}
                country="in"
                category="Technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
