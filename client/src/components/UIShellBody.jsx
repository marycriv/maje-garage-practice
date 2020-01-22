import React, { Component } from "react";
import ShoppingListsMenu from "./ShoppingListsMenu";
import ShoppingList from "./ShoppingList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      itemName: ""
    }  
  }

  components = {
    "Shopping Lists Menu": ShoppingListsMenu,
    "Shopping List": ShoppingList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const item = event.target[0].value;
    this.setState({itemName: item});
  }

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
        <ShoppingList />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="Item..."></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default UIShellBody;
