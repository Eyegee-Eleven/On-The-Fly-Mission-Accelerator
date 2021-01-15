import React from 'react';


export default class Kit extends React.Component {
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
		let kitItems = JSON.parse(modifiedFormF.kit);
		kitItems.push({name: this.state.name, weight: this.state.weight, arm: this.state.arm});
		modifiedFormF.kit = JSON.stringify(kitItems);

		this.props.setFormF(modifiedFormF);
		
		this.setState({name: "", weight: "", arm: ""});
	}
	
	render(){
		let kitItems =JSON.parse(this.props.formf.kit);
		let itemRows = kitItems.map( (item, index) =>{
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