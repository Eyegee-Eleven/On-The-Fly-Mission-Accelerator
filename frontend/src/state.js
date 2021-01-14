import React from 'react'


const StateContext = React.createContext({}); //var that holds a context inside of it, context being state at a given moment in time (a place you have acces to state is context  (scope that holds state similar to function scope))

const StateProvider = (props) => {
  const initState = {
    LgButton: {
      buttons:[
        {name: 'Accelerate Your Mission',to: '/modify-form-f'},
        { name: 'Change On-The-Fly', to: '/on-the-fly'}
      ]
    },
    FormF:{
      id:0,
      formlist:[],
      lineItems:[]
    },
    //setting init state
    setState: (newState) => { //setting the state once used to everything prior plus added
      updateState(state => {
        return { ...state, ...newState }
      })
    }
  };
  const [state, updateState] = React.useState(initState); //what the inital state will be equal to

  //const [state,(updateState)] = Reac.useState({} aka inital state)

  return (

    <StateContext.Provider value={state}> 
      {props.children} 
    </StateContext.Provider> //props.children is going to searchout all child componets that is wrapped by the state context provided, therby allowing them to be apart of this new context, i.e the ONE context
    //when the app is started with webpack it is loaded with state value of line 13
  )
}


export default StateProvider ;
export { StateContext } ;