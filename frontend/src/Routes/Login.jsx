import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
	super(props);

	this.state = {
	  email: "",
	  password: "",
	  password_incorrect: false,
	  user_registered: true,
	  login_successful : false,
	};
	}
	validateForm() {
	return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
		  [event.target.id]: event.target.value
		});
	}
	password_check(){
		if (this.state.password_incorrect)
			return (<div> <p align='center'>Invalid Password </p> </div>)
		if (!this.state.user_registered)
			return (<div> <p align='center'>User is not registered.</p> </div>)
		if (this.state.login_successful)
		{
      if (localStorage.length === 0) localStorage.setItem('isLoggedIn' , true)
      return (<Redirect to = '/dashboard'/>)
		}
	}
	handleSubmit = event => {
		this.setState({password_incorrect: false, user_registered:true, login_successful:false});
		fetch(
            'http://localhost:5000/login',
            {   method: 'POST',
                headers: new Headers(
                   {"Content-Type": "application/json",
                    "Accept":"application/json"}
                ),

                body: JSON.stringify({'email': this.state.email, 'password': this.state.password})
             }
           ).then( response => {return response.json()})
			.then (data => {return data})
			.then(data => {
				if(data.login==="password_incorrect") 
					this.setState({password_incorrect : true})
				else if(data.login==="user_not_registered") 
					this.setState({user_registered : false})
				else if (data.login === "successful")
					this.setState({login_successful : true});
			})
            .catch(err => console.log("err"))
		event.preventDefault();
	}
	render() {
	    return (
			<div className="Login">
        <h1 align='center'> Log in </h1>
          <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email" bssize="large">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" bssize="large">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </Form.Group>
              {this.password_check()}
              <Button
                block
                bssize="large"
                disabled={!this.validateForm()}
                type="submit"
                variant = 'primary'
            >
                Login
              </Button>
              <Button
                block
                bssize="large"
                type="submit"
                variant = 'success'
                href='/'
            >
            Go Back
            </Button>
          </Form>
	        </div>
	    );
	}
}

export default Login;