import React, { Component } from 'react';
import {RaisedButton, Slider} from 'material-ui'

/*---------------INITIAL STATE CONSTANTS-----------------*/
const MONO_DEFUALT = 2;
const QUESTIONS_DEFAULT = 6;

/*---------------DUMB PRESENTATIONAL COMPONENT-----------------*/


const DumbTimer = ({ handleMonologueChange, handleQTimeChange, monologue, questions, displayMinSec }) => (
	<div className="clearfix">
		<div className="col-12 mx-auto">
			<h1 className="center">Welcome to Hotseat!</h1>
			<div className="col-6">
				<h3>Monologue time</h3>
				<h3>{displayMinSec(monologue)}</h3>
				<Slider
					defaultValue={MONO_DEFUALT}
					min={1}
					max={6}
					onChange={handleMonologueChange}
				/>
			</div>

			<div className="col-6">
				<h3>Questions time</h3>
				<h3>{displayMinSec(questions)}</h3>
				<Slider
					defaultValue={QUESTIONS_DEFAULT}
					min={2}
					max={12}
					onChange={handleQTimeChange}
				/>
			</div>
		</div>

			<RaisedButton>Start!</RaisedButton>
	</div>
)


/*---------------STATEFUL TIMER COMPONENT-----------------*/
class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monologue: MONO_DEFUALT,
			questions: QUESTIONS_DEFAULT,
			started: false
		};

		this.handleMonologueChange = this.handleMonologueChange.bind(this);
		this.handleQTimeChange = this.handleQTimeChange.bind(this);
	}

	handleMonologueChange(event, monologue) {
		this.setState({ monologue });
	}

	handleQTimeChange(event, questions) {
		this.setState({ questions });
	}

	displayMinSec(time) {
		const min = Math.floor(time);
		let sec = ((time - min) * 60).toString().split('.')[0];
		while (sec.length < 2) {
			sec = '0' + sec;
		}
		return `${min}:${sec}`;
	}

	render() {
		return (
			<DumbTimer
				handleQTimeChange={this.handleQTimeChange}
				handleMonologueChange={this.handleMonologueChange}
				monologue={this.state.monologue}
				questions={this.state.questions}
				started={this.state.started}
				displayMinSec={this.displayMinSec}
			/>
		)
	}
}



export default Timer;
