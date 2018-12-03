import Taro, {Component} from '@tarojs/taro'
import {SwiperItem} from '@tarojs/components'
import {AtCard} from 'taro-ui'

export default class SwiperItemComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {index, item} = this.props;
    if (!item) {
      return null;
    }
    return (
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
    );
  }
}
