import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

export default class ChallengeDetail extends Component {
  componentWillMount() {
    console.log(JSON.parse(this.$router.params.params))
  }

  render () {
    return (
      <View>
        Hello
      </View>
    );
  }
}
