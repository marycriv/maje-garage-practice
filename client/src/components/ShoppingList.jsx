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

  // columns = ['Owner', 'ListName', 'Item', 'Quantity', 'Aisle', 'Need'];
  // formatters = {
  //   'ZipCode': function(val) {
  //     return val + '-0000';
  //   }
  // };

  // data = [
  //   {
  //     Owner: "Karen",
  //     ListName: "List One",
  //     Item: "Orange",
  //     Quantity: "2",
  //     Aisle: "4",
  //     Need: false
  //   },
  //   {
  //     Owner: "Karen",
  //     ListName: "List One",
  //     Item: "Banana",
  //     Quantity: "3",
  //     Aisle: "7",
  //     Need: true
  //   },
  //   {
  //     Owner: "Karen",
  //     ListName: "List Two",
  //     Item: "Soda",
  //     Quantity: "1",
  //     Aisle: "14",
  //     Need: true
  //   }
  // ];

  columns = ['Name', 'Address', 'City', 'State', 'ZipCode', 'Country'];
  formatters = {
    'ZipCode': function(val) {
      return val + '-0000';
    }
  };

  data = [
    {
      Name: "Lin",
      Address: "123 Main Street",
      City: "Austin",
      State: "TX",
      ZipCode: "12345",
      Country: "United States"
    },
    {
      Name: "Mak",
      Address: "45 2nd Street",
      City: "Austin",
      State: "TX",
      ZipCode: "78766",
      Country: "United States"
    },
    {
      Name: "Joe",
      Address: "40 Down Street",
      City: "San Francisco",
      State: "CA",
      ZipCode: "90706",
      Country: "United States"
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
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
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
          const format = this.formatters[col] || function(val) { return val; };

          return (
            <StructuredListCell key={col} className="simple-list-row">
              {format(row[col])}
            </StructuredListCell>
          );
        })}
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

              <StructuredListBody>
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
