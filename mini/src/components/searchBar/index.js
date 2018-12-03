import Taro, {Component} from '@tarojs/taro'
import {AtSearchBar} from 'taro-ui'

export default class SearchBarComponent extends Component{
  render() {
    const {fixed, value, placeholder, onFocus} = this.props;
    return (
      <AtSearchBar
        fixed={fixed}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    );
  }
}
