import { CATELIST } from '../constants/cate'
let defaultState = {
}
let reducer = (state = defaultState, action) => {
  let data = { ...state }
  switch (action.type) {
    case CATELIST:
      data = action.obj.data
      return data
    default:
      return data
  }
}
export default reducer