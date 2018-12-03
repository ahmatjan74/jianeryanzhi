import Taro from '@tarojs/taro'
export const getsessionKey = async (code) => {
  let res = await wx.cloud.callFunction({  //调用getSecrkKey方法 ，在服务端获取
    name: 'getSecritKey',
    data: {
      code: code
    }
  })
  return res.result.res.session_key //获取session_key
}
//下载云端文件，返回图片路径
export const getImagePathFromCloud = async (fileID) => {
  let res = await wx.cloud.downloadFile({
    fileID: fileID
  })
  return res.tempFilePath;
}
//上传文件到云端。返回fileID
export const uploadImage2Cloud = async (imagePath, cloudPath) => {
  let res = await wx.cloud.uploadFile({
    filePath: imagePath,
    cloudPath: cloudPath,
  });
  return res.fileID;
}
//选择文件
export const chooseImageFromOriginal = async () => {
  let res = await Taro.chooseImage({
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera']
  })
  return {
    tempFilePaths: res.tempFilePaths,
    cloudPath: `images/${new Date().getTime()}.png`
  }
}
