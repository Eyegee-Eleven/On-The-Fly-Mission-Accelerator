export default function MissionDetails( {formf={}, setFormF} ){

	const inputOnChange = (event) => {
		const newFormF={...formf};
		newFormF[event.target.id]=event.target.value;
		setFormF(newFormF);
	}

	return	<div>
				Mission Name:<input type='text' id='mission' onChange={inputOnChange} value={formf.mission}/>
				To:<input type='text' id='to' onChange={inputOnChange} value={formf.to}/>
				From:<input type='text' id='from' onChange={inputOnChange} value={formf.from}/>
				Tail:<input type='text' id='tail' onChange={inputOnChange} value={formf.tail}/>
				Date:<input type='date' id='date' onChange={inputOnChange} value={formf.date}/>
			</div>
}