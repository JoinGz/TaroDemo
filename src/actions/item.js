import {
  ITEMDETAIL
} from "../constants/item";
import {
  ITEMDETAILAPI
} from '../constants/api'
import Taro from '@tarojs/taro'

let itemAction = (obj) => ({
  type: ITEMDETAIL,
  obj
})
export function dispatchItem(id) {
  return dispatch => {
    return Taro.request({
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      mode: 'cors',
      url: ITEMDETAILAPI,
      data: {
        itemId: id
      }
    }).then(res => {
      dispatch(itemAction(res))
      return res
    })
  }
}
