import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  setConfiguration: ['init']
})

export const SettingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  init: null
})

/* ------------- Reducers ------------- */
export const setConfiguration = (state, {init}) => state.merge({
  init
})

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CONFIGURATION]: setConfiguration
})
