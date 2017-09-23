import React, { Component } from "react";
import Router, { Link } from "react-router";

export default class Form_SetMenu extends Component {
	constructor(props){
		super(props);
		this.state = {
			itemName: "",
			itemDescription: "",
			menu: []
		};
		this.addItem = this.addItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(e){
		let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
		console.log(newState);
	}
	addItem(e){
		const newItem = {
			itemName: this.state.itemName,
			itemDescription: this.state.itemDescription
		};
		this.setState({
			menu: [...this.state.menu, newItem]
		});
		this.setState({
			itemName: "",
			itemDescription: ""
		})
	}
	handleClick(e){
		this.props.setMenu(
			this.state.menu
		);
	}

	render(){
		const items = this.state.menu;
		const listOfItems = items.map(function(item,i){
			return (
				<li className="collection-item" key={i}>
			    	<input value={item.itemName} />
			      	<input value={item.itemDescription} />
			    </li>
			)
		});
		return (
			<div className="col s4">
			<form>
				<div className="input-field">
		          <input id="icon_prefix" type="text" className="validate" name="itemName" value={this.state.name} onChange={this.handleChange}/>
		          <label htmlFor="icon_prefix">Item Name</label>
		        </div>
		        <div className="input-field">
		          <input id="icon_prefix" type="text" className="validate" name="itemDescription" value={this.state.password} onChange={this.handleChange}/>
		          <label htmlFor="icon_prefix">Item Description</label>
		        </div>
		        <a className="waves-effect waves-light btn" onClick={this.addItem}>add item</a>
		        <Link to="/step_3" className="waves-effect waves-light btn" onClick={this.handleClick}>next</Link>
	        </form>
	        <ul className="collection">
		      {listOfItems}
		    </ul>
	        </div>
		);
	}
}
