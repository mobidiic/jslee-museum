import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { IntroPage, ExhibitPage, ArchivePage, NewsPage, ErrorPage } from './pages'
import App from './components/App'

const Root = () => {
  return (
    <Router>
      <div className="main">
        <Route exact path="/" component={ App } />
        <Switch>
          <Route path="/about" component={ IntroPage } />
          <Route path="/exhibition" component={ ErrorPage } />
          <Route path="/archive" component={ ErrorPage } />
          <Route path="/news" component={ ErrorPage } />
        </Switch>
      </div>
    </Router>
  )
}

export default Root
