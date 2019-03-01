import { HOME_RECOMMEND } from '../constants/home'
let defaultState = {
  recommend: []
}
let reducer = (state = defaultState, action) => {
  let data = { ...state }
  switch (action.type) {
    case HOME_RECOMMEND:
      data.recommend = action.obj.data.data.itemList
      return data
    default:
      return data
  }
}
export default reducer