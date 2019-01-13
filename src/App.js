import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <main>
        <SiteNavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </Router>
  );
}

const SiteNavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about-us">About Us</Link>
    </li>
  </ul>
);

const HomePage = () => (
  <h3>Home page</h3>
);

const NotFoundPage = ({ location }) => (
  <React.Fragment>
    <h3>404 Not Found</h3>
    <h4>Url: {location.pathname}</h4>
  </React.Fragment>
);

export default AppRouter;