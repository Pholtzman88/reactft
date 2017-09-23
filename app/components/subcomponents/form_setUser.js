import React, { Component } from "react";
import Router, { Link } from "react-router";

export default class Form_SetUser extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			password: "",
			menu: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(e){
		let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
		console.log(newState);
	}

	handleClick(){
		this.props.setUser(
			this.state.name,
			this.state.password
		);
	}

	render(){
		return (
			<form className="col s4">
				<div className="input-field">
		          <input id="icon_prefix" type="text" className="validate" name="name" value={this.state.name} onChange={this.handleChange}/>
		          <label htmlFor="icon_prefix">User Name</label>
		        </div>
		        <div className="input-field">
		          <input id="icon_prefix" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange}/>
		          <label htmlFor="icon_prefix">password</label>
		        </div>
		        <Link to="/step_2" className="waves-effect waves-light btn" onClick={this.handleClick}>next</Link>
	        </form>
		);
	}
}
