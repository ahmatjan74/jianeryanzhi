const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init();
exports.main =  async(event, context, cb) => {
  const appId = 'wx8acc5c6ba6cddf2b';
  const secrit = '87a5102052100a51f571687d8068787d';
  const jscode = event.code;
  console.log("event------",event)
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secrit}&js_code=${jscode}&grant_type=authorization_code`

  var response = await axios({
    method: 'GET',
    url: url,
    responseType: 'application/json'
  })
  console.log('response',response)
  return {
    res: response.data
  }
}