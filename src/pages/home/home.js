import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import searchIcon from './assets/search.png'
import { homeRecommend } from '../../actions/home'
import './home.scss'
import Loading from '@components/loading/loading'
import Recommend from '../home/recommend3/index.js'
@connect(
  ({ counter, home }) => ({
    counter,
    home
  }),
  {homeRecommend}
)
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: false,
      num: 1
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState((old, newval) => {
    //     console.log(old)
    //     console.log(newval)
    //     return {
    //       load: true
    //     }
    //   })
    // }, 2000)
    this.props.homeRecommend().then(res=>{
      console.log(res);
      this.setState({ load: true })
    })
  }
  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
    // if(nextProps.home.recommend.length > 0){
    //   this.setState({ load: true })
    // }
  }
  add = () => {
    // this.setState({ num: 123 })
    // console.log(this.state.num) //1
    // this.setState((old)=>{
    //     console.log(old)
    //     old.num++
    //     return {
    //       num: old.num
    //     }
    //   })
    this.setState({ num: 123 }, () => {
      console.log(this.state.num) // 123
    })
    console.log(this.props)
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    if (!this.state.load) {
      return <Loading />
    }
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
            <Input
              className="home__search__input"
              type="text"
              placeholder="输入你想搜索的商品名"
            />
          </View>
        </View>
        {/* <Text onClick={this.add}>Home</Text> */}
        <Recommend list={this.props.home.recommend} />
      </View>
    )
  }
}

export default Index
