import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Loading from '@components/loading/loading'
import { dispatchCate } from '../../actions/cate'
import { getWindowHeight } from '../../utils/styles'
import classNames from 'classnames'
import List from './list'

import './index.scss'
@connect(
  ({ cate }) => ({
    cate
  }),
  dispatch => ({
    dispatchCateList() {
      dispatch(dispatchCate())
    }
  })
)
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      currentId: -1,
      list: {}
    }
  }
  config = {
    navigationBarTitleText: '分类'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
    if (nextProps.cate.code === '200') {
      this.state = {
        loaded: true,
        currentId: nextProps.cate.data.categoryList[0].id,
        list: nextProps.cate.data.categoryList[0]
      }
    }
  }

  componentWillUnmount() {}
  componentDidMount() {
    this.props.dispatchCateList()
  }
  componentDidShow() {}

  componentDidHide() {}
  changeID (id,i,arr) {
    this.setState({
      currentId: id,
      list: arr[i]
    })
  }
  render() {
    if(!this.state.loaded){
      return <Loading />
    }
    let { currentId, list } = this.state
    return (
      <View className="cateWarp">
        <ScrollView
            className='cateWarp__left'
            scrollY
            scrollWithAnimation
            scrollTop='0'
            style={`height:${getWindowHeight()}`}
            lowerThreshold='20'
            upperThreshold='20'
            onScrolltoupper={this.onScrolltoupper}
            onScroll={this.onScroll}>
            {this.props.cate.data.categoryList.map((v,i,arr)=>{
              const active = v.id === currentId
              return (<View className="cateWarp__left__title__warp">
                <Text onClick={this.changeID.bind(this,v.id,i,arr)} className={classNames('cateWarp__left__title', active && 'cateWarp__left__title--active')}>{v.name}</Text>
              </View>)
            })}
        </ScrollView>
        <ScrollView
            className='cateWarp__right'
            scrollY
            scrollWithAnimation
            scrollTop='0'
            style={`height:${getWindowHeight()}`}
            lowerThreshold='20'
            upperThreshold='20'
            onScrolltoupper={this.onScrolltoupper}
            onScroll={this.onScroll}>
            <View className='cateWarp__right-wrap'>
              <List list={list} />
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default Index
