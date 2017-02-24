/* global firebase */
import React, { Component } from 'react';
import {RaisedButton} from 'material-ui';
import {connect} from 'react-redux';
import {fetchQuestions} from '../reducers/questions'


/*---------------DUMB PRESENTATIONAL COMPONENT-----------------*/

const DumbQuestions = ({ selectedQuestion, chooseQuestion }) => (
	<div className="piece-container">
		<RaisedButton
			fullWidth={true}
			onTouchTap={chooseQuestion}
			secondary={true}>
			Random Question!
		</RaisedButton>
		<h3 className="center p1">{selectedQuestion}</h3>
	</div>
)


/*---------------CLASS QUESTION COMPONENT-----------------*/

class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedQuestion: ''
		}
		this.chooseQuestion = this.chooseQuestion.bind(this)
	}

	componentDidMount() {
		const { getAllQuestions } = this.props;
		firebase.database().ref('/questions/').once('value')
		.then(snapshot => {
			getAllQuestions(snapshot.val())
		})
		.catch(console.error)
	}

	chooseQuestion() {
		const { questions } = this.props;
		const randIndex = Math.floor(Math.random() * questions.length);
		const selectedQuestion = questions[randIndex];
		this.setState({ selectedQuestion });
	}

	render() {
		return (
			<DumbQuestions
				chooseQuestion={this.chooseQuestion}
				selectedQuestion={this.state.selectedQuestion}
			/>
		);
	}
}

/*---------------REDUX CONTAINER-----------------*/

const mapState = ({ questions }) => ({ questions });
const mapDispatch = dispatch => ({
	getAllQuestions: questions => dispatch(fetchQuestions(questions))
})


export default connect(mapState, mapDispatch)(Questions);