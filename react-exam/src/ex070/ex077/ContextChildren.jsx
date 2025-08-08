import React, { Component } from "react";
import { Consumer } from "./R077_ContextApi";
class ContextChildren extends Component {
  render() {
    return (
      <Consumer>
        {(contextValue) => (
          <button onClick={(e) => contextValue.setStateFunc("react!@!!")}>
            {contextValue.name}_button
          </button>
        )}
      </Consumer>
    );
  }
}
export default ContextChildren;
