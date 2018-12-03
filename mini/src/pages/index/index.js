import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtTabBar, AtActivityIndicator} from 'taro-ui'
import Challenge from "./challenge/index";
import Me from "./me/index";
import './index.scss'
import Werun from './werun'



export default class Index extends Component {
  constructor(props) {
    super(...props);
    this.state = {
      current: 0,
      loading: true
    }
  }

  config = {
    navigationBarTitleText: '健而言之',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: '#6190E8',
  }

  componentDidMount() {
    //获取用户信息。授权
    this.authorizeUser();
    this.getUserInfoFromLogInFunction()
    //获取其他数据
    //根据用户的id获取用户的挑战
    this.setState({
      loading: false
    })
  }

  getUserInfoFromLogInFunction = () => {
    wx.cloud.callFunction({
      name: 'login'
    }).then((res) => {
      console.log(res.result)
      Taro.getUserInfo().then((res) => {
        var userInfo = res;
        console.log(userInfo)
      })
    })
  }

  getChallengeInfoFromDB = (userInfo, encryptedData) => {
    console.log(userInfo)
    console.log(encryptedData)
  }
  getWeRunDataFrom = (werun) => {
    var appId = 'wx8acc5c6ba6cddf2b'
    Taro.login().then((res) => {
      console.log("234234234234234234234", appId);
      wx.cloud.callFunction({
        name: 'getSecritKey',
        data: {
          code: res.code
        }
      }).then((res1) => {
        var sessionKey = res1.result.res.session_key
        Taro.getUserInfo().then((res2) => {
          //var userInfo = res2;
          //console.log(userInfo)
          var iv = res2.iv;
          Werun(appId, sessionKey, iv, werun)
          //console.log("----------")
          //console.log(data)
          //console.log("----------")
        })
      });
    });
  }

  authorizeUser = () => {

  }


  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick = (value) => {
    this.setState({
      current: value
    })
  }

  render() {
    const {current, loading} = this.state;
    return (
      <View className='index'>
        <AtTabBar
          fixed
          tabList={[
            {title: '挑战', iconPrefixClass: 'icon', iconType: 'gotcha'},
            {title: '我的', iconPrefixClass: 'icon', iconType: 'me'}
          ]}
          current={this.state.current}
          onClick={this.handleClick.bind(this)}
          iconSize='24'
          fontSize='14'
        />
        {
          !loading ? (current === 0 ? <Challenge/> : <Me/>) : null
        }
        {loading ? <AtActivityIndicator mode='center'/>
           : null}
      </View>
    )
  }
}
