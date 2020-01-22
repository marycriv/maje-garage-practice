import React, { Component } from "react";
import ShoppingList from "../components/ShoppingList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  components = {
    "Shopping List": ShoppingList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
        <input type="text" placeholder="Item..."></input>
        <input type="button" value="Add Item"></input>
      </div>
    );
  }
}
export default UIShellBody;
