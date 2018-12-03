import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components'
import {AtIcon} from 'taro-ui'
import ChallengeCard from '../../../../components/challengeCard/index'

export default class MyChallenge extends Component {
  onMyChallengeClick = (i) => {
    const params = {
      name: i
    }
    const paramStr = JSON.stringify(params)
    Taro.navigateTo({
      url: `/pages/index/challengeDetail/index?params=${paramStr}`
    })
    //console.log(i);
  }
  render() {
    const tempChallenge = [1,2,3,4];
    const myChallengeProps = {
      data: tempChallenge
    }
    return (
      <View>
        <AtIcon style='margin-left: 20px; margin-right: 5px' prefixClass='icon' value='gotcha' size='20' color='gray' />
        <Text style='color: gray; font-size: 18px;'>我的挑战</Text>
        <View>
          {
            tempChallenge.map((item, index) => (
              <View onClick={this.onMyChallengeClick.bind(this, index)} key={index}>
                <ChallengeCard myChallengeProps={myChallengeProps}/>
              </View>
                ))
          }
        </View>
      </View>
    );
  }
}
