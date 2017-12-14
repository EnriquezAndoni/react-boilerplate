import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import StartupActions from '../Redux/StartupRedux'

import './Styles/App.css'

class App extends Component {

  /**
   * @constructor
   * @description Initialize the state
   */
  constructor(props) {
    super(props)
    this.state = {
      configuration: null
    }
  }

  static propTypes = {
    attemptStartup: PropTypes.func
  }

  componentDidMount() {
    this.setState({ configuration: {text: 'New Configuration'} })
  }

  componentWillReceiveProps(nextProps) {
    console.log('Received Props: ', nextProps.config)
  }

  render() {
    const { attemptStartup } = this.props
    const { configuration } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
          <h2 className='App-subtitle'>This is a React Boilerplate created by</h2>
          <a className='Github-link' target='_blank' rel='noopener noreferrer'
             href="https://github.com/EnriquezAndoni/react-boilerplate">Andoni Enriquez</a>
        </header>
        <button onClick={() => attemptStartup(configuration)}>Check your console</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    config: state.startup.configuration
  }
}

function mapDispatchToProps (dispatch) {
  return {
    attemptStartup: (configuration) => dispatch(StartupActions.startup(configuration))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
