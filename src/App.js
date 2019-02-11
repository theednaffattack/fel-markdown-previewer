import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import Home from "./Home";
import MyMarkdown from "./MyMarkdown";

const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="markdown">Markdown Previewer_v3</Link>
    </nav>

    <Router>
      <Home path="/" />
      <MyMarkdown path="/markdown" />
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));

export default App;
