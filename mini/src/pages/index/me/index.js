import Taro,{Component} from '@tarojs/taro';
import {View} from "@tarojs/components";

export default class Me extends Component{
  constructor(props) {
    super(props)
  }
  config = {
    navigationBarBackgroundColor: '#6190E8',
  }
  render() {
    return(
      <View>
        Me
      </View>
    );
  }
}
