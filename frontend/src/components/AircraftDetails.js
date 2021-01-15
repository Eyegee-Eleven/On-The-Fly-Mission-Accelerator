export default function AircraftDetails( {formf={}, setFormF} ){

	const inputOnChange = (event) => {
		const newFormF={...formf};
		newFormF[event.target.id]=event.target.value;
		setFormF(newFormF);
	}

	return	<div>
	Basic Weight: <input type='float' id='basic_weight' onChange={inputOnChange} value={formf.basic_weight}/>
    Basic Moment: <input type='float' id='basic_moment' onChange={inputOnChange} value={formf.basic_moment}/>
    Crew Weight: <input type='float' id='crew_weight' onChange={inputOnChange} value={formf.crew_weight}/>
    Crew Moment: <input type='float' id='crew_moment' onChange={inputOnChange} value={formf.crew_moment}/>
    Fuel Weight: <input type='float' id='fuel_weight' onChange={inputOnChange} value={formf.fuel_weight}/>
    Fuel Moment: <input type='float' id='fuel_moment' onChange={inputOnChange} value={formf.fuel_moment}/>
			</div>
}
                        