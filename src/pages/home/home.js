import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import searchIcon from './assets/search.png'

import './home.scss'
@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className="index">
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View> */}
        <View className="home__search">
          <View className="home__search-warp">
            <Image className="home__search__img" src={searchIcon} />
            <Input className="home__search__input" type='text' placeholder='输入你想搜索的商品名' />
          </View>
        </View>
        Home
      </View>
    )
  }
}

export default Index
