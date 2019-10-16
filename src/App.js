import React, { Component } from 'react';
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ProductPage  from "./views/ProductPage";



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/product" component={ProductPage} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
