import React, { Component } from "react";
import ShoppingListsMenu from "./ShoppingListsMenu";
import ShoppingList from "./ShoppingList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      itemName: "",
      quantity: 4,
      owner: "Karen",
      listName: "List Two",
      aisle: "14",
      need: true,
      size: "Large",
      comment: ""
    }  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  components = {
    "Shopping Lists Menu": ShoppingListsMenu,
    "Shopping List": ShoppingList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  handleChange(event) {
    this.setState({value: event.target.value});
    //console.log(event);
  }

  handleSubmit(event) {
    const item = event.target[0].value;
    this.setState({itemName: item}, () => alert(event));
    event.preventDefault();
    //console.log(event);

  }

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
        <ShoppingList props={this.state}/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Item..." onChange={this.handleChange}></input>
          <input type="text" placeholder="Size..." onChange={this.handleChange}></input>
          <input type="text" placeholder="Comment..." onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default UIShellBody;
