import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import './index.scss'

export default class ChallengeDetailTiltle extends Component{
  render() {
    const {imageUrl, title, total, period, isDetail} = this.props.challengeCardProps;

    const sectionStyle = {
      height: isDetail ? '200px' : '150px',
      backgroundImage: `url(${imageUrl})`,
    };

    //统一写样式，通过witch props判断是那种卡片，卡片分两种，1，首页和我的卡的创建显示--card
    //2,详情页 -- detail

    return (
      <View className='card' style={ sectionStyle}>
        <View className='title'>{title}</View>
        <View className='period'>第{period}期</View>
        <View className='total'>已参与{total}人</View>
      </View>
    );
  }
}
