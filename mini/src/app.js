import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import '@tarojs/async-await'
import './icon.scss'
import './app.scss'


class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/challenge/index',
      'pages/index/me/index',
      'pages/index/search/index',
      'pages/index/challengeDetail/index'

    ]
  }


  componentDidMount () {}

  componentWillMount () {
    if (!wx.cloud) {
      console.log("please use weixin 2.3+")
    } else {
      wx.cloud.init({
        traceUser: true
      });
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
        <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
