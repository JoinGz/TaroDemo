import Taro from '@tarojs/taro'
import { CATELIST } from '../constants/cate'
import { API_CATE } from '../constants/api'

let cateAction = obj => ({
  type: CATELIST,
  obj
})
export function dispatchCate() {
  return dispatch => {
    return Taro.request({
      url: API_CATE,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      mode: 'cors'
    }).then(res => {
      // 微信小程序不允许数据超过1MB
      // res.data.data.categoryList.splice(0,2)
      dispatch(cateAction(res))
      return res
    })
  }
}
