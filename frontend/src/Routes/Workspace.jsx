import React, {Component} from "react";
import Table from "../components/Table";
import axios from "axios";
import config from "react-global-configuration";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Workspace extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      isLoading: false,
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true});

    axios
      .get(config.get('backend') + config.get('endpoints.workspace'))
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
          <Table data={this.state.data}/>
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

export default Workspace;