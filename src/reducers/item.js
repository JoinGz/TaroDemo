import { ITEMDETAIL } from '../constants/item'
let defaultState = {
  code: null
}
let reducer = (state = defaultState, action) => {
  let data = { ...state }
  switch (action.type) {
    case ITEMDETAIL:
      data = action.obj.data
      return data
    default:
      return data
  }
}
export default reducer