import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Premium from "./Components/Premium/Premium";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Regular from "./Components/Regular/Regular";
import NothingHere from "./Components/404/404";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
     <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/premium" component={Premium} />
            <Route path="/regular" component={Regular} />
            <Route component={NothingHere} />
            <Route />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}


export default App;
