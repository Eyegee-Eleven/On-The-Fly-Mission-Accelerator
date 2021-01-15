import LgButton from '../components/LgButton';
import { mount } from 'enzyme'
import StateProvider from '../state'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
  

describe('LgButton', () => {
    let appWrapper;
    beforeEach(() => {
        appWrapper = mount(
          <StateProvider>
            <Router>
              <LgButton />
            </Router>
          </StateProvider>
        )
      })
    it('Creates a button', () => {
        const buttonMaker = appWrapper.find('button')
        expect(buttonMaker).toHaveLength(2)
    })
})