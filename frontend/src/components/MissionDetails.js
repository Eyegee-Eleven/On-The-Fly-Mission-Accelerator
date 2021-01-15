import '../css/MissionDetails.css'

export default function MissionDetails( {formf={}, setFormF} ){

	const inputOnChange = (event) => {
		const newFormF={...formf};
		newFormF[event.target.id]=event.target.value;
		setFormF(newFormF);
	}

	return	<div className='inputs'>
				Mission Name:<input type='text' id='mission' className='input' onChange={inputOnChange} value={formf.mission}/>
				To:<input type='text' id='to' className='input' onChange={inputOnChange} value={formf.to}/>
				From:<input type='text' id='from' className='input' onChange={inputOnChange} value={formf.from}/>
				Tail:<input type='text' id='tail' className='input' onChange={inputOnChange} value={formf.tail}/>
				Date:<input type='date' id='date' className='input' onChange={inputOnChange} value={formf.date}/>
			</div>
}