// pages/report/report.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',//默认展示第一个标签
    twoShow:true,//页面两个标签的切换
    showXgkx:''
  },
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
    if(this.data.current == 'tab1'){
      console.log("行程信息");
      this.setData({
        twoShow:true
      })
    }
    if(this.data.current == 'tab2'){
      console.log("防疫信息");
      this.setData({
        twoShow:false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

    //判断用户是否登录，登录则使用，没有登录则要求登录
    var token = wx.getStorageSync('token')
    if(!token){
      wx.showModal({
        content: '请先在个人中心页面登录',
        showCancel:false,
        success(e){
          wx.switchTab({
            url: '/pages/user/user',
          })
        }
      })
    }
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