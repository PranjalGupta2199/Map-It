import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : props.data,
      columns:[],
      loading: true,
    }
  }

  render(){  
    const columns = Object.keys(this.state.data[0]).map(function(key) {
      return {'Header': key, 'accessor':key}
    });

  return (
      <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize = {10}
        />      
  )};
}

export default Table;