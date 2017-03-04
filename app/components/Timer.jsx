import React, { Component } from 'react';
import {RaisedButton, Slider} from 'material-ui'
import { connect } from 'react-redux'
import {setTimerStatus, reset} from '../reducers/timerStatus'
import UserContainer from './users.jsx'
// import CircularProgressbar from 'react-circular-progressbar';

/*---------------INITIAL STATE CONSTANTS-----------------*/
const MONO_DEFUALT = 2;
const QUESTIONS_DEFAULT = 6;


/*---------------DUMB PRESENTATIONAL COMPONENT-----------------*/


const DumbTimer = ({ handleMonologueChange, handleQTimeChange, monologue, questions, displayMinSec, timerStatus, handleStart, paused }) => (
	<div className="clearfix">
		<div className="col-12 mx-auto px2">
			<h1 className="center">Welcome to Hotseat!</h1>
			<div className="col-6 inline-block">
				<h3>Monologue time</h3>
				<h3>{displayMinSec(monologue)}</h3>
				<Slider
					disabled={!paused}
					style={{ width: '80%'}}
					defaultValue={MONO_DEFUALT}
					min={0}
					max={6}
					onChange={handleMonologueChange}
				/>
			</div>

			<div className="col-6 inline-block">
				<h3>Questions time</h3>
				<h3>{displayMinSec(questions)}</h3>
				<Slider
					disabled={!paused}
					style={{ width: '80%'}}
					defaultValue={QUESTIONS_DEFAULT}
					min={2}
					max={12}
					onChange={handleQTimeChange}
				/>
			</div>
		</div>
		<div className="col-12 mx-auto piece-container">
			<RaisedButton fullWidth={true} primary={true} onTouchTap={handleStart}>{(!paused) ? 'Pause' : 'Start!'}</RaisedButton>
		</div>



	</div>
)


/*---------------STATEFUL TIMER COMPONENT-----------------*/
class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monologue: MONO_DEFUALT,
			questions: QUESTIONS_DEFAULT,
			paused: true,
		};

		this.mIntervalId = 0;
		this.qIntervalId = 0;

		this.handleMonologueChange = this.handleMonologueChange.bind(this);
		this.handleQTimeChange = this.handleQTimeChange.bind(this);
		this.handleStart = this.handleStart.bind(this);

		this.timer = this.timer.bind(this);
	}

	handleMonologueChange(event, monologue) {
		this.setState({ monologue });
	}

	handleQTimeChange(event, questions) {
		this.setState({ questions });
	}

	handleStart() {
		if (!this.state.paused) {
			clearInterval(this.mIntervalId)
			clearInterval(this.qIntervalId)
			this.setState({
				paused: true
			})
		}
		else {
			this.setState({
				paused: false
			})
			if (this.state.monologue > 0) this.props.startTimer('monologue')
			else {
				this.props.startTimer('questions')

			}
			setTimeout(() => this.timer(this.props.timerStatus), 200)
		}
	}

	handleReset() {
		clearInterval(this.mIntervalId)
		clearInterval(this.qIntervalId)
		this.props.resetTimer()
	}

	displayMinSec(time) {
		if (time < 0) return '0:00'
 		const min = Math.floor(time);
		let sec = ((time - min) * 60).toString().split('.')[0];
		while (sec.length < 2) {
			sec = '0' + sec;
		}
		return `${min}:${sec}`;
	}

	timer(status) {
		status === 'monologue' ?
		this.mIntervalId = setInterval(() => this.tick(status), 1000) :
		this.qIntervalId = setInterval(() => this.tick(status), 1000)
	}

	tick(status){
		if (!this.state.questions) {
			this.handleReset()
		}

		if (status === 'monologue'){
			if(this.state.monologue > 0) {
				this.setState({
					monologue: this.state.monologue - (1 / 60)
				})
			}
			else {
				this.props.startTimer('questions');
				firebase.database().ref(`seed_fellows/${this.props.selectedPerson}`).set(true)

				this.setState({
					questions: this.state.questions - (1 / 60)
				})
			}
		} else if (status === 'questions') {
		  this.setState({
				questions: this.state.questions - (1 / 60)
			})
		}

	}

	render() {
		return (
		  <div>
				<DumbTimer
					handleQTimeChange={this.handleQTimeChange}
					handleMonologueChange={this.handleMonologueChange}
					handleStart={this.handleStart}
					monologue={this.state.monologue}
					questions={this.state.questions}
					displayMinSec={this.displayMinSec}
					timerStatus={this.props.timerStatus}
					paused={this.state.paused}
				/>
			</div>
		)
	}
}

/*---------------REDUX WRAPPER-----------------*/

const mapState = (state) => {
	return {
		timerStatus: state.timerStatus,
		selectedPerson: state.users.selectedPerson,
	}
};

const mapDispatch = dispatch => ({
	startTimer: status => dispatch(setTimerStatus(status)),
	resetTimer: () => dispatch(reset())
})

export default connect(mapState, mapDispatch)(Timer);

