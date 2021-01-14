import { shallow } from 'enzyme'
import OnTheFly from '../components/on-the-fly'
import React from 'react'

describe('on-the-fly page', ()=>{
  it('renders a back button',()=>{
    let appWrapper = shallow(<OnTheFly/>)
    let button = appWrapper.exists('button')
    expect(button).toEqual(true);
  })

  it('renders form f with mission,tail,date', async ()=>{
    const fetch = jest.fn();
    let wrapper=shallow(<OnTheFly/>, { disableLifecycleMethods: true })

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

    await wrapper.instance().componentDidMount();
    console.log('sauce')
   
    
      expect(wrapper.find(".Misson")).toHaveLength(2)
      expect(wrapper.find(".Tails")).toHaveLength(2)
      expect(wrapper.find(".Date")).toHaveLength(2)
      
      fetch.mockClear();



  })

})
