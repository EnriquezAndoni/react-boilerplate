import React, { Component } from 'react'
import './Styles/App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
          <h2 className='App-subtitle'>This is a React Boilerplate created by</h2>
          <a className='Github-link'
            href="https://github.com/EnriquezAndoni/react-boilerplate"
            target='_blank'>Andoni Enriquez</a>
        </header>
      </div>
    )
  }
}

export default App
