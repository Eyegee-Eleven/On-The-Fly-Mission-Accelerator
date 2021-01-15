import React from 'react';
import MissionDetails from './MissionDetails';
import NavigationPane from './NavigationPane';
import Kit from './Kit';
import Cargo from './Cargo';
import Summary from './Summary';
import AircraftDetails from './AircraftDetails';

import {Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';

class ModifyF extends React.Component {
    constructor(props){
        super(props);
        this.state= {
                        formf: {
                            tail: "0000",
                            date: "",
                            from: "",
                            to: "",
                            mission: "TRAINING",
                            basic_weight: 0,
                            basic_moment: 0,
                            crew_weight: 0,
                            crew_moment: 0,
                            fuel_weight: 0,
                            fuel_moment: 0,
                            kit: '[]',
                            cargo: '[]'
                        }
                    }
    }

    
    setFormF = (newFormFData) => {
        this.setState({formf: newFormFData});
    }

    render() {
        return  <>
                    <BrowserRouter>
                        <NavigationPane baseURL={this.props.match.path}/>

                        <Switch>

                            <Route path={this.props.match.path+'/missiondetails'}>
                                <MissionDetails formf={this.state.formf} setFormF={this.setFormF}/>
                            </Route>

                            <Route path={this.props.match.path+'/aircraftdetails'}>
                                <AircraftDetails formf={this.state.formf} setFormF={this.setFormF}/>
                            </Route>

                            <Route path={this.props.match.path+'/kit'}>
                                <Kit formf={this.state.formf} setFormF={this.setFormF}/>
                            </Route>

                            <Route path={this.props.match.path+'/cargo'}>
                                <Cargo formf={this.state.formf} setFormF={this.setFormF}/>
                            </Route>

                            <Route path={this.props.match.path+'/summary'}>
                                <Summary formf={this.state.formf} setFormF={this.setFormF}/>
                            </Route>

                        </Switch>
                    </BrowserRouter>
                </>
    }
}

export default withRouter(ModifyF)