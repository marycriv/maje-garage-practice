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
      Comment: "A beautiful bunch of ripe banana. Daylight come and me wan' go home."
    },
    {
      Item: "Orange",
      Owner: "Karen",
      ListName: "List One",
      Size: "Softball",
      Comment: "Extra pulp"
    },
    {
      Item: "Soda",
      Owner: "Karen",
      ListName: "List Two",
      Size: "64 pack",
      Comment: "Diet Coke"
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
      this.setState({newItem: newList});
    }
    
    event.target[2].value = event.target[1].value = event.target[0].value = null;
    
    event.preventDefault();
  }

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
        <ShoppingList items={this.items}/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Item..."></input>
          <input type="text" placeholder="Size..." ></input>
          <input type="text" placeholder="Comment..." ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default UIShellBody;
