import React from 'react';

export default class Cargo extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name: "",
			weight: "",
			arm: ""
		}
	}

	valueChanged = (event, id) => {
		let stateCopy = {...this.state};
		stateCopy[id]=event.target.value;

		this.setState(stateCopy);
	}


    add = (event) => {
		let modifiedFormF = this.props.formf;
		let cargoItems = JSON.parse(modifiedFormF.cargo);
		cargoItems.push({name: this.state.name, weight: this.state.weight, arm: this.state.arm});
		modifiedFormF.cargo = JSON.stringify(cargoItems);

		this.props.setFormF(modifiedFormF);
		
		this.setState({name: "", weight: "", arm: ""});
	}
	
	render(){
		let cargoItems =JSON.parse(this.props.formf.cargo);
		let itemRows = cargoItems.map( (item, index) =>{
			return(
			<li key={`item-${index}`} id={`item-${index}`}>
			<h2 className='item-name' >{item.name}</h2>
			<h2 className='item-weight' >{item.weight}</h2>
			<h2 className='item-arm' >{item.arm}</h2>
			</li>
			)
		})
		
		
		return  <div className='inputs'>
						Name:<input id='name' onChange={event => this.valueChanged(event, 'name')} value={this.state.name}/>
						Weight:<input id='weight' onChange={event => this.valueChanged(event, 'weight')} value={this.state.weight}/>
						Arm:<input id='arm' onChange={event => this.valueChanged(event, 'arm')} value={this.state.arm}/>
						<input type='button' id='add-item' value="Add Item" onClick={this.add}/>

				<div id='item-table'>
				<ul>
					{itemRows}
				</ul>
				</div>

					</div>
	}

}