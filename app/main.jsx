'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import Timer from './components/Timer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// needed for Material-UI
injectTapEventPlugin();

const AppContainer = ({children}) => (
  <MuiThemeProvider>
    { children }
  </MuiThemeProvider>
)


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/timer" />
        <Route path="/timer" component={Timer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)