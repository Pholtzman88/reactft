import React, { Component } from "react";

export default class Form_Confirmation extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			password: "",
			menu: []
		};
	}
	render(){
		return <h1>confirmation</h1>
	}
}
