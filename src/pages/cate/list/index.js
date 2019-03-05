import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text,Swiper, SwiperItem  } from '@tarojs/components'
import './index.scss'
class List extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    console.log('--------------------')

    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}
  componentDidMount() {}
  componentDidShow() {}

  componentDidHide() {}
  render() {
    let { focusBannerList, subCategoryList } = this.props.list
    return (
      <View className="list">
        <Swiper
          className="test-h"
          autoplay
        >
        {focusBannerList.map((v,i)=>{
          return (
            <SwiperItem>
              <View key={i}>
                <Image className="list_banner" mode="widthFix" src={v.picUrl} />
              </View>
            </SwiperItem>
          )
        })}
        </Swiper>
        <View className="list_content">
          {subCategoryList.map((v,i)=>{
            return (
              <View key={i} className="list_box">
                <Image className="list_img" src={v.prettyBannerUrl} />
                <View className="list_txt_wrap">
                  <Text className="list_txt">{v.name}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default List
