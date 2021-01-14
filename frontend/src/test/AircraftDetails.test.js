import { shallow } from 'enzyme'
import AircraftDetails from '../components/AircraftDetails';

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
    kit: "[{name: 'Fire extinguisher', weight: 20, moment: 5},{name: 'Rescue seat', weight: 35, moment: 15}]",
    cargo: "[{name: '2 pax', weight: 500, moment: 250},{name: '600RDS', weight: 210, moment: 50}]"
};

describe ('AircraftDetails', () => {
    it('Displays a form for inputting data', () => {
        const appWrapper = shallow(<AircraftDetails/>)
        const basic_weightf = appWrapper.find('#basic_weight')
        const basic_momentf = appWrapper.find('#basic_moment')
        const crew_weightf = appWrapper.find('#crew_weight')
        const crew_momentf = appWrapper.find('#crew_moment')
        const fuel_weightf = appWrapper.find('#fuel_weight')
        const fuel_momentf = appWrapper.find('#fuel_moment')
  
  
        expect(basic_weightf).toHaveLength(1);
        expect(basic_momentf).toHaveLength(1);
        expect(crew_weightf).toHaveLength(1);
        expect(crew_momentf).toHaveLength(1);
        expect(fuel_weightf).toHaveLength(1);
        expect(fuel_momentf).toHaveLength(1);
    })

    it('Form elements should hold values from formf passed through props',()=>{
   
        const appWrapper = shallow(<AircraftDetails formf={mockFormF}/>)
        const basic_weightf = appWrapper.find('#basic_weight')
        const basic_momentf = appWrapper.find('#basic_moment')
        const crew_weightf = appWrapper.find('#crew_weight')
        const crew_momentf = appWrapper.find('#crew_moment')
        const fuel_weightf = appWrapper.find('#fuel_weight')
        const fuel_momentf = appWrapper.find('#fuel_moment')

        expect(basic_weightf.props().value).toEqual(mockFormF.basic_weight);
        expect(basic_momentf.props().value).toEqual(mockFormF.basic_moment);
        expect(crew_weightf.props().value).toEqual(mockFormF.crew_weight);
        expect(crew_momentf.props().value).toEqual(mockFormF.crew_moment);
        expect(fuel_weightf.props().value).toEqual(mockFormF.fuel_weight);
        expect(fuel_momentf.props().value).toEqual(mockFormF.fuel_moment);
    })

    it('User input changes should update the parent components state with new form data', ()=>{
        const setFormF = (newFormFData) => mockFormF=newFormFData;
        const appWrapper = shallow(<AircraftDetails formf={mockFormF} setFormF={setFormF}/>)

        const changeAndExpect = (propName, newValue) => {
            const formElement = appWrapper.find(`#${propName}`)
            formElement.simulate('change', { target: { id: propName, value: newValue } })
            expect(mockFormF[propName]).toEqual(newValue)
        }

        changeAndExpect("basic_weight", "150");
        changeAndExpect("basic_moment", "120");
        changeAndExpect("crew_weight", "600");
        changeAndExpect("crew_moment", "80");
        changeAndExpect("fuel_weight", "100000");
        changeAndExpect("fuel_moment", "100");
    })

})
