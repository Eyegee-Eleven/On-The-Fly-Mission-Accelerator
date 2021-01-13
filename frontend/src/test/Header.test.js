import Header from '../components/Header';
import { shallow } from 'enzyme'

describe('Header', () => {
    it('Renders the header on the page', () => {
        const appWrapper = shallow(<Header/>)
        const headerRender = appWrapper.exists('header')
        expect(headerRender).toEqual(true)
    })
})