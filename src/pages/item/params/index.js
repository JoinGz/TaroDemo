import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
class Params extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {list} = this.props
    return (
      <View>
        {
          list.map((v,i)=>{
          return (<View key={i} className="params__warp">
              <View className="params__title">
                <Text className="params__detail__text">{v.attrName}</Text>
              </View>
              <View className="params__detail">
                <Text className="params__detail__text">{v.attrValue}</Text>
              </View>
          </View>)
          })
        }
        
      </View>
    )
  }
}
export default Params
