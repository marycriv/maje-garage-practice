import React, { Component } from "react";
import ShoppingListsMenu from "./ShoppingListsMenu";
import ShoppingList from "./ShoppingList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  constructor(props) {
    super(props);   

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  items = [
    {
      Item: "Banana",
      Owner: "Karen",
      ListName: "List One",
      Size: "One bunch",
      Comment: "A beautiful bunch of ripe banana. Daylight come and me wan' go home.",
      Need: "No",
      checked: false
    },
    {
      Item: "Orange",
      Owner: "Karen",
      ListName: "List One",
      Size: "Softball",
      Comment: "Extra pulp",
      Need: "Yes",
      checked: true
    },
    {
      Item: "Soda",
      Owner: "Karen",
      ListName: "List Two",
      Size: "64 pack",
      Comment: "Diet Coke",
      Need: "No",
      checked: false
    }
  ];

  components = {
    "Shopping Lists Menu": ShoppingListsMenu,
    "Shopping List": ShoppingList,
    "Basic Page": BasicPage
  };
  
  defaultComponent = "Basic Page";

  async componentDidMount() {
    this.setState({
      items: this.items,
    })
  }

  handleSubmit(event) {
    const item = event.target[0].value;
    const size = event.target[1].value;
    const comment = event.target[2].value;

    if(item && size && comment) {
      const row = {"Item": item, "Size": size, "Comment": comment};
      const newList = this.state.items.push(row);
      this.items = newList;
      this.setState({items: newList});
    }
    
    event.target[2].value = event.target[1].value = event.target[0].value = null;
    
    event.preventDefault();
  }

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    const state = this.state || {items: this.items};
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
        <ShoppingList items={state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Item..." data-testid="item-input"></input>
          <input type="text" placeholder="Size..." data-testid="size-input"></input>
          <input type="text" placeholder="Comment..." data-testid="comment-input"></input>
          <input type="submit" value="Submit" data-testid="submit-button"></input>
        </form>
      </div>
    );
  }
}
export default UIShellBody;
