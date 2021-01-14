import App from '../App';
import { shallow } from 'enzyme'
import LgButton from '../components/LgButton'

describe('App', () => {
    it('Renders buttons on the screen', () => {
        const appWrapper = shallow(<App/>)
        const numButtons = appWrapper.find(LgButton)
        expect(numButtons).toHaveLength(1)
    })
})

