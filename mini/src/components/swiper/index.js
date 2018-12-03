import Taro, {Component} from '@tarojs/taro'
import {Swiper, SwiperItem, View} from '@tarojs/components'
import ChallengeCard from "../challengTitleCard/index";
import {getImagePathFromCloud, chooseImageFromOriginal, uploadImage2Cloud} from '../../utils/utils'
import Button from "@tarojs/components/src/components/button/index";

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: null
    }
  }

  getImageFromBackendFunction = () => {
    Taro.login().then((res) => {
      wx.cloud.callFunction({
        name: 'getSecritKey',
        data: {
          code: res.code
        },
        success: res => {
          //console.log("session key",res.result.res.session_key)
        },
        fail: err => {
          console.log("error", err)
        }
      })
    });
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'login',
      success: res => {
        //console.log(res.result)
      },
      fail: err => {
        //console.log(err)
      }
    })
  }

  componentWillMount() {
    this.getImageFromCloud();
    //this.getImageFromBackendFunction();
  }

  getImageFromCloud = () => {
    const fileId = 'cloud://jianeryanzhi-8a5cf1.6a69-jianeryanzhi-8a5cf1/images/1543161281489.png'
    getImagePathFromCloud(fileId).then((imageUrl) => {
      if (imageUrl) {
        this.setState({
          imageUrl: imageUrl
        })
      }
    });
  }

  uploadFile2Cloud = async () => {
    const {tempFilePaths, cloudPath} = await chooseImageFromOriginal();
    if (tempFilePaths) {
      const fieldId = await uploadImage2Cloud(tempFilePaths[0], cloudPath);
      //添加到数据库
    };

  }

  render() {
    const {
      indicatorColor,
      indicatorActiveColor,
      circular,
      indicatorDots,
      autoplay,
      itemData
    } = this.props;
    const challengeCardProps = {
      imageUrl: this.state.imageUrl,
      title: '早起',
      total: 122,
      period: 1234,
      isDetail: false
    }
    if (!this.state.imageUrl) {
      return null;
    }
    return (
      <Swiper
        indicatorColor={indicatorColor}
        indicatorActiveColor={indicatorActiveColor}
        circular={circular}
        indicatorDots={indicatorDots}
        autoplay={autoplay}
        style="height: 200px"
      >
        <SwiperItem onClick={this.uploadFile2Cloud.bind(this)}>
          <ChallengeCard challengeCardProps={challengeCardProps}/>
        </SwiperItem>
        <SwiperItem>
          <ChallengeCard challengeCardProps={challengeCardProps}/>
        </SwiperItem>
        {
          //itemData.map((item, index) => <SwiperItemComponent index={index} item={item} />)
        }
        <Button onClick={this.uploadFile2Cloud.bind(this)}></Button>
      </Swiper>
    );
  }
}
