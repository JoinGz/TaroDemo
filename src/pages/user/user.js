import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Index.scss'
class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      res: {},
      net: {}
    }
  }
  config = {
    navigationBarTitleText: '用户信息'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {
    Taro.getSystemInfo({
      success: res => console.log(res)
    }).then(res => this.setState({ res }))
    Taro.getNetworkType({
      success: res => console.log(res.networkType)
    }).then(net => this.setState({ net }))
  }

  componentDidHide() {}
  render() {
    let { res, net } = this.state
    return (
      <View className="user">
        <Text className="user__text">当前系统为： {res.system} </Text>
        <Text className="user__text">
          当前手机为： {res.brand} {res.model}{' '}
        </Text>
        <Text className="user__text">当前语言为： {res.language} </Text>
        <Text className="user__text">当前网络为： {net.networkType} </Text>
      </View>
    )
  }
}

export default Index
