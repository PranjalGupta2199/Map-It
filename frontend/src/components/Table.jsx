import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : props.data,
      columns: props.columns,
      loading: true,
    }
  }

  render(){
    return (
      <ReactTable
        data={this.state.data}
        columns={this.state.columns}
        defaultPageSize = {10}
        />      
    )};
}

export default Table;