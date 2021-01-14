import '../css/AircraftDetails.css'

export default function AircraftDetails( {formf={}, setFormF} ){

	const inputOnChange = (event) => {
		const newFormF={...formf};
		newFormF[event.target.id]=event.target.value;
		setFormF(newFormF);
	}

	return	(
        <div className='inputs'>
            Basic Weight: <input type='float' id='basic_weight' className='input' onChange={inputOnChange} value={formf.basic_weight}/>
            Basic Moment: <input type='float' id='basic_moment' className='input' onChange={inputOnChange} value={formf.basic_moment}/>
            Crew Weight: <input type='float' id='crew_weight' className='input' onChange={inputOnChange} value={formf.crew_weight}/>
            Crew Moment: <input type='float' id='crew_moment' className='input' onChange={inputOnChange} value={formf.crew_moment}/>
            Fuel Weight: <input type='float' id='fuel_weight' className='input' onChange={inputOnChange} value={formf.fuel_weight}/>
            Fuel Moment: <input type='float' id='fuel_moment' className='input' onChange={inputOnChange} value={formf.fuel_moment}/>
        </div>
	)
}
                        