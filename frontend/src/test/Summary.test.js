import { shallow } from 'enzyme'
import Summary from '../components/Summary';

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

//Moment = weight*arm
//Arm = moment/weight


describe ('Summary', () => {

    it("Looks like it should", ()=>{
        const wrapper = shallow(<Summary formf={mockFormF}/>);

        const kit = wrapper.find('#kit');
        const cargo = wrapper.find('#cargo');
        const operating = wrapper.find('#operating');
        const zerofuel = wrapper.find('#zerofuel');
        const gross = wrapper.find('#gross');

        expect(kit).toHaveLength(1);
        expect(cargo).toHaveLength(1);
        expect(operating).toHaveLength(1);
        expect(zerofuel).toHaveLength(1);
        expect(gross).toHaveLength(1);

        expect(kit.find('#weight')).toHaveLength(1);
        expect(cargo.find('#weight')).toHaveLength(1);
        expect(operating.find('#weight')).toHaveLength(1);
        expect(zerofuel.find('#weight')).toHaveLength(1);
        expect(gross.find('#weight')).toHaveLength(1);

        expect(kit.find('#arm')).toHaveLength(1);
        expect(cargo.find('#arm')).toHaveLength(1);
        expect(operating.find('#arm')).toHaveLength(1);
        expect(zerofuel.find('#arm')).toHaveLength(1);
        expect(gross.find('#arm')).toHaveLength(1);
    });

    it("Should calculate kit correctly", ()=>{
        const wrapper = shallow(<Summary formf={mockFormF}/>);

        const kit = wrapper.find('#kit');
        const kitWeight = kit.find('#weight');
        const kitArm = kit.find('#arm');

        const kitItems=JSON.parse(mockFormF.kit);
        let overAllWeight=0;
        let overAllMoment=0;
        for (let item of kitItems){
            overAllWeight+=Number(item.weight);
            overAllMoment+=Number(item.weight)*Number(item.arm);
        }
        const overAllArm = Math.round(overAllMoment/overAllWeight);

        expect(kitWeight.props().value).toBe(String(overAllWeight));
        expect(kitArm.props().value).toBe(String(overAllArm));
    });

    it("Should calculate cargo correctly", ()=>{
        const wrapper = shallow(<Summary formf={mockFormF}/>);

        const cargo = wrapper.find('#cargo');
        const cargoWeight = cargo.find('#weight');
        const cargoArm = cargo.find('#arm');

        const cargoItems=JSON.parse(mockFormF.cargo);
        let overAllWeight=0;
        let overAllMoment=0;
        for (let item of cargoItems){
            overAllWeight+=Number(item.weight);
            overAllMoment+=Number(item.weight)*Number(item.arm);
        }
        const overAllArm = Math.round(overAllMoment/overAllWeight);

        expect(cargoWeight.props().value).toBe(String(overAllWeight));
        expect(cargoArm.props().value).toBe(String(overAllArm));
    });

})
