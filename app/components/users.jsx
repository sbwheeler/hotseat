import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui'
import { selectPerson } from '../reducers/users'

class UserComponent extends Component {
  constructor(props) {
    super(props)
    this.pickRandomPerson = this.pickRandomPerson.bind(this)
  }

  pickRandomPerson() {
    const nameArray = Object.keys(this.props.users).filter(key => {
      return !this.props.users[key];
    });

    const pickedPerson = nameArray[Math.floor(Math.random()*nameArray.length)];
    this.props.selectPerson(pickedPerson)
  }

  render() {
    return (
    <div className="piece-container">
      <RaisedButton secondary={true} fullWidth={true} onClick={() => this.pickRandomPerson()}>Pick a person!</RaisedButton>
      <h2 className="center p1">{this.props.selectedPerson}</h2>
    </div>
    )

  }
}



function mapStateToProps(state) {
  return {
    users: state.users.users,
    selectedPerson: state.users.selectedPerson,
    timerStatus: state.timerStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPerson: (person) => dispatch(selectPerson(person))
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserComponent)

export default UserContainer;
