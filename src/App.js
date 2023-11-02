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
import {useAuth0} from "@auth0/auth0-react"

function App() {

const {
  loginWithPopup,
  loginWithRedirect,
  logout,
  user,
  isAuthenticated,
  getAccessTokenSilenty
} = useAuth0()
  

 
    return (
      <div style={{}}>
        {/* <div>
          <h1>Auth0 authentication</h1>
          <ul>
            <li>
              <button onClick={loginWithPopup}>Login with popup</button>
            </li>
            <li>
            <button onClick={loginWithRedirect}>login with Redirect</button>
            </li>
            <li>
            <button onClick={logout}>Logout</button>
            </li>
          </ul>
          <h3>User is { isAuthenticated ? "logged in" : "Not Logged in"}</h3>
          {isAuthenticated && (
            <pre style={{textAlign:"start"}}>
              {JSON.stringify(user, null, 2)}
            </pre>
          )}
        </div> */}
  <Router>
      <Header  loginWithPopup={loginWithPopup}
            loginWithRedirect={loginWithRedirect}
            logout={logout}
            user={user}/>
      <Routes>
        <Route 
          exact path="/"
          element={<BestBooks  loginWithPopup={loginWithPopup}
            loginWithRedirect={loginWithRedirect}
            logout={logout}
            user={user}
            isAuthenticated={isAuthenticated}
            getAccessTokenSilenty={getAccessTokenSilenty}/>}
          >
        </Route>
        {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
      </Routes>
      {/* <Footer /> */}
    </Router>
      </div>
      )
    }
  
  export default App;
  