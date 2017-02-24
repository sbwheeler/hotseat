'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import Home from './components/Home'
import Timer from './components/Timer'
import Airhorn from './components/Airhorn'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// needed for Material-UI
injectTapEventPlugin();

import {fetchUsers} from './reducers/users'

const AppContainer = ({children}) => (
  <MuiThemeProvider>
    { children }
  </MuiThemeProvider>
)

const onAppEnter = () => {
  return firebase.database().ref('/seed_fellows/').once('value')
  .then(function(snapshot) {
    store.dispatch(fetchUsers(snapshot.val()))
  });
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} onEnter={onAppEnter}>
        <IndexRedirect to="/timer" />
        <Route path="/timer" component={Timer} />
        <Route path="/home" component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
