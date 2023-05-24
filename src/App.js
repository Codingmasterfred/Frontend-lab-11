import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./About"

class App extends React.Component {
  render() {
    return (
      <div>
  <Router>
      <Header />
      <Routes>
        <Route 
          exact path="/"
          element={<BestBooks />}
          >
        </Route>
        {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
        <Route 
          exact path="/About"
          element={<About />}
          >
        </Route>
      </Routes>
      <Footer />
    </Router>
      </div>
      )
    }
  }
  
  export default App;
  