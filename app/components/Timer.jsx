import React, { Component } from 'react';
import {RaisedButton, Slider} from 'material-ui'
import UserContainer from './users.jsx'

/*---------------DUMB PRESENTATIONAL COMPONENT-----------------*/


const DumbTimer = () => (
	<div className="clearfix">
		<div className="col-12 mx-auto">
			<h1 className="center">Welcome to Hotseat!</h1>
			<div className="col-6">
				<h3>Monologue time</h3>
				<Slider />
			</div>

			<div className="col-6">
				<h3>Questions time</h3>
				<Slider />
			</div>
		</div>

			<RaisedButton>Click me!</RaisedButton>
	<UserContainer />
	</div>
)


/*---------------STATEFUL TIMER COMPONENT-----------------*/
class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monologue: 2,
			questions: 6,
			started: false
		};
	}

	render() {
		return (
			<DumbTimer />
		)
	}
}



export default Timer;
