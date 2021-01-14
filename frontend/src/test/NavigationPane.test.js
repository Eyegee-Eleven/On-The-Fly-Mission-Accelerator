import { shallow } from 'enzyme';
import NavigationPane from '../components/NavigationPane'

describe("NavigationPane",() => {
    it("has all required children",()=>{
        const wrapper = shallow(<NavigationPane baseURL=''/>);
        expect(wrapper.find('#missiondetails')).toHaveLength(1);
        expect(wrapper.find('#aircraftdetails')).toHaveLength(1);
        expect(wrapper.find('#kit')).toHaveLength(1);
        expect(wrapper.find('#cargo')).toHaveLength(1);
        expect(wrapper.find('#summary')).toHaveLength(1);
    })

    it("should highlight the link associated with the page we are on",()=>{
        const wrapper=shallow(<NavigationPane baseURL='' page="missiondetails"/>)
        const wrapper2=shallow(<NavigationPane baseURL='' page="kit"/>)


        expect(wrapper.find('#missiondetails').hasClass('highlighted')).toBe(true);
        expect(wrapper.find('#kit').hasClass('highlighted')).toBe(false);

        expect(wrapper2.find('#missiondetails').hasClass('highlighted')).toBe(false);
        expect(wrapper2.find('#kit').hasClass('highlighted')).toBe(true);
    })
})

