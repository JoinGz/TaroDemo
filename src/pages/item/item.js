import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { dispatchItem } from '../../actions/item'
import { connect } from '@tarojs/redux'
import Loading from "@components/loading/loading"
import { Swiper, SwiperItem } from '@tarojs/components'
import './item.scss'
import Parmas from './params'
import Imglist from './listimg/index.js'

@connect(
  ({ item }) => ({
    item
  }),
  {
    dispatchItem
  }
)
class Item extends Component {
  config = {
    navigationBarTitleText: '商品详情'
  }
  constructor (props) {
    super(props)
    this.id = this.$router.params.itemId
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.props.dispatchItem(this.id).then(res=>{
      console.log(res)
      this.setState({loaded: true})
    })
  }
  componentWillUnmount(){
    this.changeCode()
  }
  changeCode = () => {
      
  }
  componentWillReceiveProps(nextProps) {
    // if(nextProps.item.code !== null) {
    //   this.setState({loaded: true})
    // }
  }
  render () {
    // let id = this.$router.params.itemId
    if(!this.state.loaded){
      return (
        <Loading />
      )
    }
    let { itemDetail } = this.props.item.data
    // if(itemDetail['detailHtml']){
    //  delete itemDetail['detailHtml']
    // }
    return(
      <View>
        <Swiper
        className='item_swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
          {
            Object.keys( itemDetail).map((v,i)=>{
              if(i === 0){
              }else{
                return (<SwiperItem key={i}>
                  <View className='item_swiper-item'>
                    <Image className='item_swiper-item-img' src={`${itemDetail[v]}`} />
                  </View>
            </SwiperItem>)
              }
            })
          }
        </Swiper>
        <Text className="price"> 只需：
            <Text className="red">￥{this.props.item.data.floorPrice}</Text>
            <Text className="del">{this.props.item.data.retailPrice == this.props.item.data.floorPrice ? '' : this.props.item.data.retailPrice}</Text>
        </Text>
        <Parmas list={this.props.item.data.attrList}/>
        <Imglist html={itemDetail.detailHtml} />
      </View>
    )
  }
}
export default Item
