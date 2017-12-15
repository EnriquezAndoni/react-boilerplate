import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Translation
import { I18nProvider, Trans } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'

// Actions
import I18nActions from '../Redux/I18nRedux'

// Style
import './Styles/App.css'

class App extends Component {

  /**
   * @constructor
   * @description Initialize the state
   */
  constructor(props) {
    super(props)
    this.state = {
      catalogs: {}
    }
  }

  static propTypes = {
    loadLanguage: PropTypes.func
  }

  componentDidMount() {
    const language = this.props.language
    this.props.loadLanguage(language)
  }

  componentWillReceiveProps(nextProps) {
    const { language, catalog } = nextProps
    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: unpackCatalog(catalog)
      }
    }))
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { language } = nextProps
    const { catalogs } = nextState

    if (language !== this.props.language && !catalogs[language]) {
      // Start loading message catalog and skip update
      this.props.loadLanguage(language)
      return false
    }
    return true
  }

  render() {
    const { language } = this.props
    const { catalogs } = this.state

    // Skip rendering when catalog isn't loaded.
    if (!catalogs[language]) return (<div/>)

    return (
      <I18nProvider language={language} catalogs={catalogs}>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'><Trans id='Welcome'>Welcome to React</Trans></h1>
            <h2 className='App-subtitle'><Trans id='Created'>This is a React Boilerplate created by</Trans></h2>
            <a className='Github-link' target='_blank' rel='noopener noreferrer'
               href="https://github.com/EnriquezAndoni/react-boilerplate">Andoni Enriquez</a>
          </header>
        </div>
      </I18nProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.i18n.language,
    catalog: state.i18n.catalog
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadLanguage: (language) => dispatch(I18nActions.attemptI18n(language))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
