var WXBizDataCrypt = require('./WXBizDataCrypt')
export default (appId, sessionKey,iv, werun) => {
  var pc = new WXBizDataCrypt(appId, sessionKey)
  var data = pc.decryptData(werun , iv);
  console.log("datadatadata",data)
}
