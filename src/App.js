import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

import Button from "./components/Button";
import { counterDec, counterInc } from "./store/counter";

import Comments from "./components/Comments";

import rootReducer from "./store/rootReducer";
const createState = reducer => reducer(undefined, { type: "INIT" });

class App extends Component {
  state = createState(rootReducer);

  update = action => this.setState(prevState => rootReducer(prevState, action));

  getChildContext() {
    return { update: this.update };
  }

  render() {
    const { counter, comments } = this.state;

    return (
      <div className="App">
        <Button handler={() => this.update(counterDec())} text={"-"} />
        {counter}
        <Button handler={() => this.update(counterInc())} text={"+"} />

        <Comments
          {...{
            comments
          }}
        />
      </div>
    );
  }
}

App.childContextTypes = {
  update: PropTypes.func
};

App.propTypes = {
  comments: PropTypes.array,
  counter: PropTypes.number
};

export default App;
