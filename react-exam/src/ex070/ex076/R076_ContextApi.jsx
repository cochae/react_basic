import React, { Component } from "react";
import Children from "./ContextChildren";

const { Provider, Consumer } = React.createContext();
export { Consumer };

class R076_ContextApi extends Component {
  render() {
    return (
      <Provider value="ReactStudy">
        <Children />
      </Provider>
    );
  }
}

export default R076_ContextApi;
