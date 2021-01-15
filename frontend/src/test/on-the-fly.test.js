import { mount } from 'enzyme'
import OnTheFly from '../components/on-the-fly'
import React from 'react'
import StateProvider from '../state'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


describe('on-the-fly page', ()=>{
  let appWrapper;
  beforeEach(() => {
    appWrapper = mount(
      <StateProvider>
        <Router>
          <OnTheFly />
        </Router>
      </StateProvider>
    )
  })
  it('renders a back button',()=>{
    let button = appWrapper.exists('button')
    expect(button).toEqual(true);
  })

  it('renders form f with mission,tail,date', async ()=>{
    const fetch = jest.fn();


    fetch.mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => {
                return Promise.resolve([
                  {
                    "id": 1,
                    "tail": "0026",
                    "mission": "TRANING",
                    "date": "2021-01-12T05:00:00.000Z"
                  },
                  {
                    "id": 2,
                    "tail": "0044",
                    "mission": "PAX TRANS",
                    "date": "2022-01-12T05:00:00.000Z"
                  }
                ]);
            }
        });
    });

    console.log(appWrapper.debug())
    await appWrapper.find(OnTheFly).first().instance().componentDidMount();
    
   
      
      expect(appWrapper.find(".Misson")).toHaveLength(2)
      expect(appWrapper.find(".Tails")).toHaveLength(2)
      expect(appWrapper.find(".Date")).toHaveLength(2)
      
      fetch.mockClear();



  })

})
