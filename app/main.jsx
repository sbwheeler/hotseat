'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import Login from './components/Login'
import WhoAmI from '../app/components/WhoAmI'
import Home from './components/Home'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// needed for Material-UI
injectTapEventPlugin();

import muiTheme from './utils';
import {fetchUsers} from './reducers/users'

const AppContainer = ({children}) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    { children }
  </MuiThemeProvider>
)

/*---------------ON ENTER HOOKS-----------------*/

const onAppEnter = () => {
  return firebase.database().ref('/seed_fellows/').once('value')
  .then(function(snapshot) {
    store.dispatch(fetchUsers(snapshot.val()))
  });
}


/*---------------REACT DOM RENDER-----------------*/

//if no logged in user then show login on enter of app
//else take user to hotseat's homepage

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav> 
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onAppEnter}>
        <IndexRedirect to="/home" />
        <Route path="/hotseat" component={Main} />
        <Route path="/home" component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
