import React, { Component } from "react";
import ShoppingListsMenu from "./ShoppingListsMenu";
import ShoppingList from "./ShoppingList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  components = {
    "Shopping Lists Menu": ShoppingListsMenu,
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
        <ShoppingList />
        <input type="text" placeholder="Item..."></input>
        <input type="button" value="Add Item"></input>
      </div>
    );
  }
}
export default UIShellBody;
