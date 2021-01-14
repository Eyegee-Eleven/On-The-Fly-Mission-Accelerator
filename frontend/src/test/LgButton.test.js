import LgButton from '../components/LgButton';
import { shallow } from 'enzyme'

describe('LgButton', () => {
    it('Creates a button', () => {
        const appWrapper = shallow(<LgButton/>)
        const buttonMaker = appWrapper.find('button')
        expect(buttonMaker).toHaveLength(2)
    })
})