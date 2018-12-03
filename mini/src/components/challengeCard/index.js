import Taro ,{Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import {AtAvatar} from 'taro-ui'
import {getImagePathFromCloud} from '../../utils/utils'
import './index.scss'

export default class ChallengeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null
    }
  }

  componentDidMount() {
    const fileId = 'cloud://jianeryanzhi-8a5cf1.6a69-jianeryanzhi-8a5cf1/images/1543161281489.png'
    this.getImageFromCloud(fileId);
  }

  getImageFromCloud = (fileId) => {
     getImagePathFromCloud(fileId).then((imageUrl) => {
      if (imageUrl) {
        this.setState({
          imageUrl: imageUrl
        })
      }
    });
  };

  render() {
    const {myChallengeProps, key, index} = this.props;
    const {data} = myChallengeProps;
    console.log(data, index)
    if (!this.state.imageUrl) {
      return null;
    }
    const tempImage = [1,2,3];
    return (
      <View className='challenge-card'>
        <View className='challenge-title at-row'>
          <Text className='challenge-title-name at-col-2'>早起计划</Text>
          <Text className='challenge-period at-col at-col__offset-6'>1112期</Text>
        </View>
        <Text className='challenge-description'>说好的早起，不能说睡就睡了</Text>
        <View className='challenge-total-people at-row'>
          <View style="width: 300px">
            { tempImage.map((item, i) => {
                  const style = i === 0 ? 'margin-left: 10px' : 'margin-left: -10px';
                  return (<Image
                    key={item}
                    src={this.state.imageUrl}
                    className='image-user'
                    style={style}
                    mode="scaleToFill"
                  />
                )}
            )}

            <Text className='total-user'>112人加入</Text>
          </View>
        </View>
      </View>
    );
  }
}
