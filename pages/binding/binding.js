// pages/binding/binding.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    idcard:'',
    code:'',//获取新的code
    showXgkx:''
  },
  yourname(e){
    this.setData({
      name:e.detail.value
    })
  },
  youridcard(e){
    this.setData({
      idcard:e.detail.value
    })
  },
  binding(e){
    var baseUrl = wx.getStorageSync('baseUrl')
    var that = this
    wx.login({//获取新的code
      success:function(res){
        console.log(res.code);
        //发请求
        wx.request({
          url: baseUrl + 'new/student/',
          method:'POST',
          data:{
            code:res.code,
            name:that.data.name,
            student_number:that.data.idcard
          },
          success:function(e){
            console.log(e);
            if(e.statusCode == 200){
              wx.setStorageSync('token', e.data.token)
              wx.setStorageSync('name', that.data.name)
              wx.setStorageSync('idcard', that.data.idcard)
              if(e.data.bound == true){
                wx.switchTab({
                  url:'/pages/user/user'
                })
              }
            }else{
              wx.showToast({
                title: e.data.msg,
                icon:'none'
              })
            }
          },
          fail(e){
            wx.showToast({
              title: '服务器异常，请稍后重试',
              icon:'none'
            })
          }
        })

      }
    })
    

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取新的code
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log(app.globalData.showXgkx);
    this.setData({
      showXgkx:app.globalData.showXgkx
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})