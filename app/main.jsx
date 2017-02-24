'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'

import {fetchUsers} from './reducers/users'

const AppContainer = ({children}) => (
  <div>
    <nav>
      <h3>Here is a navbar</h3>
    </nav>
    { children }
  </div>
)

const onAppEnter = () => {
  return firebase.database().ref('/seed_fellows/').once('value')
  .then(function(snapshot) {
    console.log(snapshot.val());
    store.dispatch(fetchUsers(snapshot.val()))
  });
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} onEnter={onAppEnter}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
