// pages/teacher/teacher.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showXgkx:'',
    name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      showXgkx:app.globalData.showXgkx
    })
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
    // if(this.data.showXgkx == false){
    //   wx.showModal({
    //     content: '正在开发中，敬请期待',
    //     showCancel:false,
    //     success(e){
    //       wx.switchTab({
    //         url: '/pages/notice/notice',
    //       })
    //     }
    //   })
    // }
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