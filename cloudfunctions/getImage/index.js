const cloud = require('wx-server-sdk')
cloud.init();
exports.main = (event, context, cb) => {
  const {
    OPENID,
    APPID,
    UNIONID,
  } = cloud.getWXContext()
  console.log(OPENID);
  return event.x + event.y+ 'GOOD'+OPENID
}