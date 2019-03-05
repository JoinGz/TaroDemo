import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'
import item from "./item"
import cate from "./cate"
export default combineReducers({
  counter,
  home,
  item,
  cate
})
