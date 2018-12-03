import Taro,{Component} from '@tarojs/taro';
import {View, ScrollView,SwiperItem} from '@tarojs/components';
import {AtCard, AtGrid} from 'taro-ui'
import SearchBarComponent from "../../../components/searchBar/index";
import SwiperComponent from "../../../components/swiper/index";
import MyChallenge from './myChallenge'

export default class Challenge extends Component{
  constructor(props) {
    super(props);
    this.state = {
      challengeSwiper: [{
        id: 1,
        image: ''
      },
        {
          id: 2,
          image: ''
        },
        {
          id: 3,
          image: ''
        }]
    }
  }

  handleSearchFocus = () => {
    Taro.navigateTo({
      url: '/pages/index/search/index'
    })
  }

  renderSwiperItem = () => {
    return this.state.challengeSwiper.map((item, index) => (
        <SwiperItem key={index}>
          <AtCard
            note='小Tips'
            extra='额外信息'
            title='这是个标题'
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          >
            这也是内容区 可以随意定义功能{item.id}
          </AtCard>
        </SwiperItem>
      ));
  }

  swiperOnClick = () => {

  }

  handleTopicClick = (item, index) => {
    console.log(item, index)
  }

  render() {
    const searchBar = <SearchBarComponent
              fixed={true}
              value={this.state.searchValue}
              placeholder='搜索挑战或话题'
              onFocus={this.handleSearchFocus.bind(this)}
            />
    const swiper = <SwiperComponent
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular={true}
              indicatorDots={true}
              autoplay={true}
              itemData={this.state.challengeSwiper}
            />

    return(
      <ScrollView
        scrollY
      >
        <View>
          {searchBar}
        </View>
        <View>
          {swiper}
        </View>
        <View>
          <AtGrid
            columnNum={4}
            mode='rect'
            onClick={this.handleTopicClick.bind(this)}
            data={
            [
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: ''
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: ''
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: ''
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: ''
              },
              {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: ''
              },
              {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: ''
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: ''
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: ''
              },
            ]
          } />
        </View>
        <View>
          <MyChallenge />
        </View>
      </ScrollView>
    );
  }
}
