var constract = require('./utils/constract.js');
App({
  onLaunch: function () {
    wx.removeStorageSync("token");

  },
  Verification: function (dl) {
    var token = wx.getStorageSync('token');
    if (token) {
      typeof dl == "function" && dl(token);
      return;
    }
    wx.login({
      success: function (res) {
        console.log(res);
        wx.request({
          url: constract.login,
          data: { code: res.code },
          success: function (res2) {
            wx.getUserInfo({
              success: function (res3) {
                console.log(res3);
                console.log(res2);
                wx.request({
                  url: constract.register,
                  data: { thirdSesson: res2.data.data, rawData: res3.rawData, signature: res3.signature, encryptedData: res3.encryptedData, iv: res3.iv },
                  success: function (res4) {
                    console.log(res4);
                    token = res4.data.data;
                    wx.setStorageSync('token', token);
                    typeof dl == "function" && dl(token);
                  }
                })
              },
              fail: function (res5) {
                wx.request({
                  url: constract.noauthorize,
                  data: { thirdSesson: res2.data.data },
                  success: function (res6) {
                    token = res6.data.data;
                    wx.setStorageSync('token', token);
                    typeof dl == "function" && dl(token);
                  }
                })

              }
            })
          }
        })
      }
    })
  }
})