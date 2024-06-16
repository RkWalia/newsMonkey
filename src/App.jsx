import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default class App extends Component {

  apiKey = "741c37ee930f42caa035c3bc64b1271a"
  render() {
    return (
      <Router>
        
        <div>
        <NavBar/>
          <Routes>
            {/* Its gonna be the first class based react app.... */}
            <Route exact path={'/entertainment'} element={<News apiKey={this.apiKey} key='entertainent' pagesize={6} country='in' category='entertainent'/>} />
            <Route exact path={'/business'} element={<News apiKey={this.apiKey} key='business' pagesize={6} country='in' category='business' />} />
            <Route exact path={'/general'} element={<News apiKey={this.apiKey} key='general' pagesize={6} country='in' category='general' />} />
            <Route exact path={'/health'} element={<News apiKey={this.apiKey} key='health' pagesize={6} country='in' category='health' />} />
            <Route exact path={'/science'} element={<News apiKey={this.apiKey} key='science' pagesize={6} country='in' category='science' />} />
            <Route exact path={'/sports'} element={<News apiKey={this.apiKey} key='sports' pagesize={6} country='in' category='sports' />} />
            <Route exact path={'/technology'} element={<News apiKey={this.apiKey} key='technology' pagesize={6} country='in' category='technology' />} />
          
          
          </Routes>
        </div>
        
      </Router>
    )
  }
}

