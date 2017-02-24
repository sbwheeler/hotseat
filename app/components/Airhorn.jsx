import React, {Component} from 'react';
import {connect} from 'react-redux';

/*---------------PRESENTATIONAL COMPONENT-----------------*/


class Airhorn extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		const oldTimerStatus = this.props.timerStatus;
		const newTimerStatus = nextProps.timerStatus;

		if (oldTimerStatus === newTimerStatus) return; // only care about change in timerStatus
		if (oldTimerStatus === '') return; // no change when monologue starts
		else {
			this.audio.play();
		}
	}

	render() {
		return (
			<div>
				<audio src="airhorn.mp3" ref={audio => this.audio = audio}></audio>
			</div>
		)
	}

}

/*---------------REDUX WRAPPER-----------------*/

const mapState = ({ timerStatus }) => ({ timerStatus });

export default connect(mapState, null)(Airhorn);
