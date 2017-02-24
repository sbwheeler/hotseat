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


const DumbTimer = ({ handleMonologueChange, handleQTimeChange, monologue, questions, displayMinSec, timerStatus, handleStart }) => (
	<div className="clearfix">
		<div className="col-12 mx-auto">
			<h1 className="center">Welcome to Hotseat!</h1>
			<div className="col-6 inline-block">
				<h3>Monologue time</h3>
				<h3>{displayMinSec(monologue)}</h3>
				<Slider
					disabled={!!timerStatus}
					style={{ width: '80%'}}
					defaultValue={MONO_DEFUALT}
					min={1}
					max={6}
					onChange={handleMonologueChange}
				/>
			</div>

			<div className="col-6 inline-block">
				<h3>Questions time</h3>
				<h3>{displayMinSec(questions)}</h3>
				<Slider
					disabled={!!timerStatus}
					style={{ width: '80%'}}
					defaultValue={QUESTIONS_DEFAULT}
					min={2}
					max={12}
					onChange={handleQTimeChange}
				/>
			</div>
		</div>

			<RaisedButton primary={true} onTouchTap={handleStart}>{(!!timerStatus) ? 'Pause' : 'Start!'}</RaisedButton>

		<UserContainer />
	</div>
)


/*---------------STATEFUL TIMER COMPONENT-----------------*/
class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monologue: MONO_DEFUALT,
			questions: QUESTIONS_DEFAULT,
		};

		this.mIntervalId = 0;
		this.qIntervalId = 0;

		this.handleMonologueChange = this.handleMonologueChange.bind(this);
		this.handleQTimeChange = this.handleQTimeChange.bind(this);
		this.handleStart = this.handleStart.bind(this);

		this.timer = this.timer.bind(this);

		console.log(this.props)

	}

	handleMonologueChange(event, monologue) {
		this.setState({ monologue });
	}

	handleQTimeChange(event, questions) {
		this.setState({ questions });
	}

	handleStart() {
		if (!!this.props.timerStatus) {
			clearInterval(this.mIntervalId)
			clearInterval(this.qIntervalId)
		}
		else {
			console.log('inside handlestart without timer status')
			this.props.startTimer('monologue')
			this.timer()

		}

	}

	handleReset() {
		clearInterval(this.mIntervalId)
		clearInterval(this.qIntervalId)
		this.props.resetTimer()
	}

	displayMinSec(time) {
		const min = Math.floor(time);
		let sec = ((time - min) * 60).toString().split('.')[0];
		while (sec.length < 2) {
			sec = '0' + sec;
		}
		return `${min}:${sec}`;
	}

	timer() {
		console.log('these are the props ', this.props)
		console.log('the timerstatus', this.props.timerStatus)

		if (this.props.timerStatus === 'monologue') {

			console.log('monologue timer')

			this.mIntervalId = setInterval(
			  this.setState({
					monologue: this.state.monologue - 0.01
				}), 1000)
		}
		else if (this.props.timerStatus === 'questions') {
			this.qIntervalId = setInterval(
			  this.setState({
					questions: this.state.questions - 0.01
				}), 1000)
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
				/>
				{/* this.props.timerStatus && <div>timer on!!!</div> */}
				{/*<CircularProgressbar
	          percentage={this.state.percentage}
	          strokeWidth={4}
	          textForPercentage={this.showTime}
	        >
         </CircularProgressbar>*/}

        {console.log(this.state.monologue)}
			</div>
		)
	}
}

/*---------------REDUX WRAPPER-----------------*/

const mapState = ({ timerStatus }) => ({ timerStatus });

const mapDispatch = dispatch => ({
	startTimer: status => dispatch(setTimerStatus(status)),
	resetTimer: () => dispatch(reset())
})

export default connect(mapState, mapDispatch)(Timer);

