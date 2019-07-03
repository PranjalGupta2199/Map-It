import React, {Component} from "react";
import Table from "../components/Table";
import axios from "axios";
import config from "react-global-configuration";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from './Map';
import {Link } from 'react-router-dom';

class Layers extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      columns: [
        {Header: 'href',
          accessor: 'href'},
        {Header: 'name', 
          accessor: 'name',
          Cell: 
        e =><Link to={{pathname: '/map', state: e.value,}}> {e.value} </Link>},
        ],
      isLoading: false,
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true});

    axios
      .get(config.get('backend') + config.get('endpoints.layer'))
      .then(response => this.setState({
        data: response.data,
        isLoading: false
      }))
      .catch(error => {
        this.setState({ isLoading : false})
      });
    
  }

  render(){
    if (this.state.data.length !== 0){
      return (
        <div> 
          <Header />
          <h1><center> Available Layers </center></h1>
          <Table data={this.state.data} columns={this.state.columns} />
          <Footer />
        </div>
      )
      
    }
    else return (
      <div> 
        <p> Loading ... </p> 
      </div>
    )
  }
}

export default Layers;