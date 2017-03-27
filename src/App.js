import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { map, reverse } from 'ramda'
import Entry from './pages/entry'
import Status from './pages/status'
import Timeline from './pages/timeline'

const App = function (props) {
  return (
    <BrowserRouter>
    <div>
      <header className="pa4 bg-light-blue white-80">
        <h1>MoodRing</h1>
        <nav>
          <Link to="/">Home</Link>
          |
          <Link to="/timeline">Timeline</Link>
          |
          <Link to="/new">New Status</Link>
        </nav>
      </header>
      <Route exact path="/" component={Status} />
      <Route path="/new" component={Entry} />
      <Route path="/timeline" component={Timeline} />
    </div>
    </BrowserRouter>
  )
}


export default App
