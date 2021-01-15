import { shallow } from 'enzyme';
import Kit from '../components/Kit';


let mockFormF = {
    tail: "0026",
    date: "2021-01-12T07:00:00.000Z",
    from: "KABQ",
    to: "KABQ",
    mission: "TRANING",
    basic_weight: 36000,
    basic_moment: 11000,
    crew_weight: 660,
    crew_moment: 57,
    fuel_weight: 8500,
    fuel_moment: 2700,
    kit: '[{"name": "Fire extinguisher", "weight": 20, "arm": 5},{"name": "Rescue seat", "weight": 35, "arm": 15}]',
    cargo: '[{"name": "2 pax", "weight": 500, "arm": 250},{"name": "600RDS", "weight": 210, "arm": 50}]'
};

describe ('Kit', () => {
    it('Displays a form for inputting data', () => {
        const appWrapper = shallow(<Kit formf={mockFormF}/>)
        const ArmForm = appWrapper.find('#arm')
        const NameForm = appWrapper.find('#name')
        const WeightForm = appWrapper.find('#weight')
        const addButton = appWrapper.find('#add-item')
        expect(ArmForm).toHaveLength(1);
        expect(NameForm).toHaveLength(1);
        expect(WeightForm).toHaveLength(1);
        expect(addButton).toHaveLength(1);
    })

    it('Displays a table of items in kit',()=>{
        const appWrapper = shallow(<Kit formf={mockFormF}/>)

        const itemTable = appWrapper.find('#item-table')

        const item1 = itemTable.find('#item-0');
        const item2 = itemTable.find('#item-1');

        expect(item1.find('.item-name').text()).toEqual('Fire extinguisher');
        expect(item1.find('.item-weight').text()).toEqual('20');
        expect(item1.find('.item-arm').text()).toEqual('5');

        expect(item2.find('.item-name').text()).toEqual('Rescue seat');
        expect(item2.find('.item-weight').text()).toEqual('35');
        expect(item2.find('.item-arm').text()).toEqual('15');
    })

    it('Can add a new item to the kit table',()=>{
        const setFormF = (newFormFData) => mockFormF=newFormFData;

        const appWrapper = shallow(<Kit formf={mockFormF} setFormF={setFormF}/>)

        const nameBox = appWrapper.find('#name')
        const weightBox = appWrapper.find('#weight')
        const armBox = appWrapper.find('#arm')
        const addButton = appWrapper.find('#add-item')
        
        nameBox.props().onChange( {target: {id: 'name', value: 'Fast Rope'} } )
        weightBox.props().onChange( {target: {id: 'weight', value: '120'} } )
        armBox.props().onChange( {target: {id: 'arm', value: '45'} } )
        addButton.props().onClick()

        expect(nameBox.props().value).toBe("");
        expect(weightBox.props().value).toBe("");
        expect(armBox.props().value).toBe("");

        expect(JSON.parse(mockFormF.kit)[2]).toEqual({name: 'Fast Rope', weight: '120', arm: '45'});
    })

    
})













// searchBoxChanged = (event) => {
//     this.setState({searchValue: event.target.value});
//   }

//   buttonClicked = async (event) => {
//     let response = await fetch("http://localhost:3001/movies?search="+encodeURIComponent(this.state.searchValue));
//     let {movies} = await response.json();

//     this.setState({moviesToDisplay: movies});
//   }