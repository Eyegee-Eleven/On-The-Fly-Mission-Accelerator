import React from 'react';
import MissionDetails from './MissionDetails';
import NavigationPane from './NavigationPane';
import Kit from './Kit';
import Cargo from './Cargo';
import Summary from './Summary';
import {Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';

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
                            basic_weight: 36240.5,
                            basic_moment: 14097.89,
                            crew_weight: 660,
                            crew_moment: 157.5,
                            fuel_weight: 9000,
                            fuel_moment: 3460.5,
                            kit: '[{"name":"overallkit", "weight": 1437.8, "arm": 519.92}]',
                            cargo: '[{"name":"1 pax", "weight": 250, "arm": 480}]'
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