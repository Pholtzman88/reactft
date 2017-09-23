import React, { Component } from "react";
import Router, { Link } from "react-router";

export default class Main extends Component {


	render(){
		return (
			<div>
			{this.props.children}
			</div>
		);
	}
}
