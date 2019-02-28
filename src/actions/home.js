import {HOME_RECOMMEND} from '../constants/home'
import {API_HOME_RECOMMEND} from '../constants/api'

export let homeRecommend = obj => ({
  type: HOME_RECOMMEND,
  url: API_HOME_RECOMMEND,
  obj
})