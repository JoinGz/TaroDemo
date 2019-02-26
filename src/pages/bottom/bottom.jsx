import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import './bottom.scss'

class Bottom extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View className="bottom">
        <View className="li">
          <Icon size='30' type='info' />
          <br />
          welcome
        </View>
        <View className="li">
          <Icon size='30' type='waiting' />
          <br />
          my
        </View>
        <View className="li">
          <Icon size='30' type='download' />
          <br />
          next
        </View>
        <View className="li">
          <Icon size='30' type='search' />
          <br />
          go
        </View>
      </View>
    )
  }
}
export default Bottom
