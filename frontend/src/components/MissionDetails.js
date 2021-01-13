export default function MissionDetails( {formf={}, setFormF} ){

	const inputOnChange = (event) => {
		const newFormF={...formf};
		newFormF[event.target.name]=event.target.value;
		setFormF(newFormF);
	}

	return	<div>
				Mission Name:<input type='text' id='mission' onChange={inputOnChange}>{formf.mission}</input>
				To:<input type='text' id='to' onChange={inputOnChange}>{formf.to}</input>
				From:<input type='text' id='from' onChange={inputOnChange}>{formf.from}</input>
				Tail:<input type='text' id='tail' onChange={inputOnChange}>{formf.tail}</input>
				Date:<input type='date' id='date' onChange={inputOnChange}>{formf.date}</input>
			</div>
}