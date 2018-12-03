import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtSearchBar} from 'taro-ui'

export default class SearchPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  config = {
    navigationBarBackgroundColor: '#6190E8',
  }

  onSearchTextChange = (value) => {
    let searchValue = value.replace(/(^\s*)|(\s*$)/g, "")
    if(searchValue) {
      this.setState({
        searchValue
      })
    }
  }

  onSearchButtonClick = () => {
    //do search action
    console.log(this.state.searchValue)
    //挑战到结果页
  }


  render() {
    return(
      <View>
        <AtSearchBar
          value={this.state.searchValue}
          palceholder='请输入'
          onChange={this.onSearchTextChange.bind(this)}
          onActionClick={this.onSearchButtonClick.bind(this)}
          focus
        />
      </View>
    );
  }
}
