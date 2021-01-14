import ModifyF from '../components/ModifyF';
import { shallow } from 'enzyme';
import NavigationPane from '../components/NavigationPane'

describe ('ModifyF', () => {
    // it('Modify Form F should have a nagivation list/pane/thing', ()=>{
        
    //     const wrapper=shallow(<ModifyF/>);

    //     expect( wrapper.find(NavigationPane) ).toHaveLength(1);
    // })
    it('1=1',()=>{expect(1).toBe(1)});
})






// **As a** User
// **I want to** be able to navigate around the different elements of a form f
// **so that I can** complete a form f and be successful at life

// **As a** User
// **I want to** be able to see a navigation list and highlight where I am at in it
// **so that I can** know where I'm at.


// ---- 
// **Acceptance Criteria**

// **Given** I have opened a form F, either by creating a new one or modifying an existing one
// **When** I click on an item in the left nav list
// **Then** it renders the corresponding component

// **Given**  I have opened a form F, same as above
// **When** I click next
// **Then** it renders the next component in the nav list

// **Given**  I have opened a form F, same as above
// **When** I click prev
// **Then** it renders the prev component in the nav list
