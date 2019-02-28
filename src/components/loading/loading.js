import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import loadIMG from './assets/loading.gif'
import './loading.scss'
class Loading extends Component {
  config = {
    navigationBarTitleText: '加载中...'
  }

  componentWillReceiveProps() {
    
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className="loading">
        <Image className="loading__img" src={loadIMG} />
      </View>
    )
  }
}

export default Loading
