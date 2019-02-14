import React from "react";
import { Box, Flex } from "rebass";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import Home from "./Home";
import MyMarkdown from "./MyMarkdown";
import DrumMachine from "./DrumMachine";

const App = () => (
  <Flex flexDirection="column">
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="markdown">Markdown Previewer_v3</Link>
      <Link to="drummachine">Drum machine</Link>
    </nav>

    <Router>
      <Home path="/" />
      <MyMarkdown path="/markdown" />
      <DrumMachine path="/drummachine" />
    </Router>
  </Flex>
);

render(<App />, document.getElementById("root"));

export default App;
