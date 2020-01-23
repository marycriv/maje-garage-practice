import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "../pattern-components/Header";
import "../pattern-components/patterns.scss";



class ShoppingList extends Component {
  title = 'Table List';
  subtitle = 'This pattern will display and array of model objects in a multi column grid/table.';

  columns = ['Item', 'Size', 'Comment', 'Need'];

  data = [
    {
      Item: "Banana",
      Owner: "Karen",
      ListName: "List One",
      Size: "One bunch",
      Comment: "A beautiful bunch of ripe banana. Daylight come and me wan' go home.", 
      Need: "No"
    },
    {
      Item: "Orange",
      Owner: "Karen",
      ListName: "List One",
      Size: "Softball",
      Comment: "Extra pulp", 
      Need: "No"
    },
    {
      Item: "Soda",
      Owner: "Karen",
      ListName: "List Two",
      Size: "64 pack",
      Comment: "Diet Coke", 
      Need: "No"
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedRow: 0,
    };
  }

async componentDidMount() {

    this.setState({
      data: this.data,
    })
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id}  data-testid={`item-test-${id}`} onClick={() => this.onRowClick(id)}>
        <div>
          
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>
        {this.columns.map(col => {
          const format = this[col] || function(val) { return val; };
          return (
            <StructuredListCell key={col} data-testid={`item-test-${id}-${col}`} className="simple-list-row">
              {format(row[col])}
            </StructuredListCell>
          );
        })}
        <input type="checkbox" checked="true" onChange={console.log("bepis")}></input>
      </StructuredListRow>
      
    );
  };

  render() {
    const data = this.state.data;

    return (
      <div className="bx--grid pattern-container">
        <Header
          title={this.title}
          subtitle={this.subtitle}
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {this.columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
                  })}
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody data-testid="body">
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;