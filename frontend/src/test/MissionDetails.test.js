import { shallow } from 'enzyme'
import MissionDetails from '../components/MissionDetails';

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
    kit: '[{"name": "2 pax", "weight": 500, "arm": 250},{"name": "600RDS", "weight": 210, "arm": 50}]',
    cargo: '[{"name": "Fire extinguisher", "weight": 20, "arm": 5},{"name": "Rescue seat", "weight": 35, "arm": 15}]'
};

describe ('MissionDetails', () => {
    it('Displays a form for inputting data', () => {
        const appWrapper = shallow(<MissionDetails/>)
        const missionForm = appWrapper.find('#mission')
        const toForm = appWrapper.find('#to')
        const fromForm = appWrapper.find('#from')
        const tailForm = appWrapper.find('#tail')
        const dateForm = appWrapper.find('#date')
        expect(missionForm).toHaveLength(1);
        expect(toForm).toHaveLength(1);
        expect(fromForm).toHaveLength(1);
        expect(tailForm).toHaveLength(1);
        expect(dateForm).toHaveLength(1);
    })

    it('Form elements should hold values from formf passed through props',()=>{
        const appWrapper = shallow(<MissionDetails formf={mockFormF}/>)

        const missionForm = appWrapper.find('#mission')
        const toForm = appWrapper.find('#to')
        const fromForm = appWrapper.find('#from')
        const tailForm = appWrapper.find('#tail')
        const dateForm = appWrapper.find('#date')

        expect(missionForm.props().value).toEqual(mockFormF.mission);
        expect(toForm.props().value).toEqual(mockFormF.to);
        expect(fromForm.props().value).toEqual(mockFormF.from);
        expect(tailForm.props().value).toEqual(mockFormF.tail);
        expect(dateForm.props().value).toEqual(mockFormF.date);
    })

    it('User input changes should update the parent components state with new form data', ()=>{
        const setFormF = (newFormFData) => mockFormF=newFormFData;
        const appWrapper = shallow(<MissionDetails formf={mockFormF} setFormF={setFormF}/>)

        const changeAndExpect = (propName, newValue) => {
            const formElement = appWrapper.find(`#${propName}`)
            formElement.simulate('change', { target: { id: propName, value: newValue } })
            expect(mockFormF[propName]).toEqual(newValue)
        }

        changeAndExpect("mission", "TRAINING");
        changeAndExpect("to", "KCVS");
        changeAndExpect("from", "KABQ");
        changeAndExpect("tail", "0054");
        changeAndExpect("date", "2021-01-12");
    })

})
