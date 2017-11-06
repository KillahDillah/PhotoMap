import React, { Component } from 'react'
import './styles/main.css'
import Layout from './Layout'
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </Layout>
      </Router>
    )
  }
}

export default App
