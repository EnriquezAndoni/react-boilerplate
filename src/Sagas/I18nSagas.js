import { put } from 'redux-saga/effects'
import I18nRedux from '../Redux/I18nRedux'

export function * loadLanguage ({language}) {
  const catalog = yield import(`../locale/${language}/messages.js`)

  yield put(I18nRedux.setI18n(catalog))
  yield put(I18nRedux.successI18n())
}
