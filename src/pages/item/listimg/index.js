import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
class Imglist extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {html} = this.props
    let imgArr = []
    let reg = /<img.*?src="(.*?)".*?\/>/g
    let result = null
    while (result = reg.exec(html)) {
      imgArr.push(result[1])
    }
    return (
      <View className="img_warp">
        {
          imgArr.map((v,i)=>{
            return (
              <Image key={i} className="img_warp_img" mode='widthFix' src={v} />
            )
          })
        }
        
      </View>
    )
  }
}
export default Imglist
