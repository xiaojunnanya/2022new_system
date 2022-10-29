// app.js
App({
  onLaunch() {
    //改变这个showXgkx
    var that = this
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
      },
    })
    wx.request({
      url: 'https://vip.jzab.xyz/api/',
      method:'POST',
      success(e){
        console.log(e);
        if(e.data == true){
          that.globalData.showXgkx = false
        }
        if(e.data == false){
          that.globalData.showXgkx = true
        }
      }
    })
  },
  globalData: {
    //true不显示，false显示
    showXgkx: true,
  }
})
