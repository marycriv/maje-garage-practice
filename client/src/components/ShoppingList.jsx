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

  constructor(props) {
    super(props);

    this.state = {
      data: props.items,
      selectedRow: 0,
      checkbox: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, id) {
    this.state.data[id].Need = this.state.data[id].Need === "Yes" ? "No" : "Yes";
    this.state.data[id].checked = !this.state.data[id].checked
    this.setState({ 
      checkbox: !this.state.checkbox,
      
     }, () => {
      console.log('id: ', id, 'this: ', this.state.data[id].Need, 'checkbox: ', this.state.checkbox);
    });
    
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id, needValue) => {
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
        <input type="checkbox" data-testid={`checkbox-test-${id}`} checked={this.state.data[id].checked} onChange={(e) => this.handleChange(e, `${id}`)}></input>
      </StructuredListRow>
      
    );
  };

render() {
  const data = this.state.data;


  // Delete later, when create backend
  if(this.state.newItem && this.state.newItem[0] !== null) data.push(this.state.newItem);
  
  return (
    <div className="bx--grid pattern-container">

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
              {data && data.map((row, i) => {
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