
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import React, { Component } from 'react'
import NewsComponent from './Components/NewsComponent'
import Header from './Components/Header'


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route exact path="/Home" element={<NewsComponent key="general" pageSize={5} country="in" category="General"/>}></Route>
          <Route exact path="/business" element={<NewsComponent key="business" pageSize={5} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route> 
          
          <Route exact path="/health" element={<NewsComponent key="health" pageSize={5} country="in" category="health"/>}></Route> 
          <Route exact path="/science" element={<NewsComponent key="science" pageSize={5} country="in" category="science"/>}></Route> 
          <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={5} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={5} country="in" category="technology"/>}></Route> 
    
    </Routes>
    </BrowserRouter>
      </div>
    )
  }
}

