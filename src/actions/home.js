import Taro from '@tarojs/taro'
import { HOME_RECOMMEND } from '../constants/home'
import { API_HOME_RECOMMEND } from '../constants/api'

let homeRecommendAction = obj => ({
  type: HOME_RECOMMEND,
  obj
})
export function homeRecommend() {
  return dispatch => {
    Taro.request({
      url: API_HOME_RECOMMEND,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      mode: 'cors'
    }).then(res => {
      console.log(res)
      dispatch(homeRecommendAction(res))
    })
  }
}
