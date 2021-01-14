import React from 'react'
import MissionDetails from './MissionDetails'
import NavigationPane from './NavigationPane'
import Kit from './Kit'
import {Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';
import AircraftDetails from './AircraftDetails.js'
class ModifyF extends React.Component {
    constructor(props){
        super(props);
        this.state= {
                        formf: {
                            tail: "0026",
                            date: "2021-01-12T07:00:00.000Z",
                            from: "KABQ",
                            to: "KABQ",
                            mission: "TRANING",
                            basic_weight: 36000,
                            basic_moment: 11000,
                            crew_weight: 660,
                            crew_moment: 57,
                            fuel_weight: 8500,
                            fuel_moment: 2700,
                            kit: '[{"name": "Fire extinguisher", "weight": 20, "moment": 5},{"name": "Rescue seat", "weight": 35, "moment": 15}]',
                            cargo: '[{"name": "2 pax", "weight": 500, "moment": 250},{"name": "600RDS", "weight": 210, "moment": 50}]'
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
                        </Switch>
                    </BrowserRouter>
                </>
    }
}

export default withRouter(ModifyF)