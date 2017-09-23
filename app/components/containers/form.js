import React, { Component } from "react";
import Router, { Link } from "react-router";
import Form_SetUser from "../subcomponents/form_setUser.js";
import Form_SetMenu from "../subcomponents/form_setMenu.js";
import Form_Confirmation from "../subcomponents/form_confirmation.js";
export default class Form extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			password: "",
			menu: []
		};
			this.setUser = this.setUser.bind(this);
			this.setMenu = this.setMenu.bind(this);
	}
	setUser(name, password){
		this.setState({
			name: name,
			password: password
		});
		console.log(`name:${this.state.name} password:${this.state.password}`);
	}

	setMenu(menu){
		this.setState({
			menu: menu
		});
	}
	componentDidUpdate(){
		console.log(this.state);
	}

	render(){
		const childrenWithProps = React.Children.map(this.props.children,
			(child) => React.cloneElement(child,{
				setUser: this.setUser,
				setMenu: this.setMenu
			})
		);
		return (
			<div>
				<Link to="/step_1">step 1</Link>
				<Link to="/step_2">step 2</Link>
				<Link to="/step_3">step 3</Link>
				<div className="row">
					<div className="col s4"></div>
					{childrenWithProps}
					<div className="col s4"></div>
				</div>
			</div>
		);
	}
}
