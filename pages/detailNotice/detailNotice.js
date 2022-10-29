// pages/detailNotice/detailNotice.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showXgkx:'',
    img:[],//点击事件带来的数据，将img单独抽出来
    baseUrl:'https://vip.jzab.xyz/',
    item:{},//点击传来的所有数据
    title:'',
  },
  img:function(e){
    var that = this
    wx.previewImage({
      urls: [that.data.baseUrl + that.data.img],
    })
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
    console.log('onready');
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onshow');
    console.log(app.globalData.showXgkx);
    this.setData({
      showXgkx:app.globalData.showXgkx
    })

    //接受notice传来的数据
    var that = this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('detailNotice',function(data){
      console.log(data.item.content);
      
      that.setData({
        img:data.item.img,
        title:data.item.title,
        item:data.item
      })
    })
    console.log(that.data.item.content);
   setTimeout(()=>{
    console.log(that.data.title);
    if(that.data.title){
      var token = wx.getStorageSync('token')
      var baseUrl = wx.getStorageSync('baseUrl')
      //已读的请求
      setTimeout(function(){
        console.log(that.data.item.id);
        wx.request({
          url: baseUrl+ 'notice/read',
          method:'POST',
          header:{
            'token':token
          },
          data:{
            id:that.data.item.id
          },
          success(e){
            console.log(e);
          }
        })
      },100)
    }else{
      wx.showModal({
        content: '数据请求错误，请重新点击',
        showCancel:false,
        success(e){
          wx.switchTab({
            url: '/pages/notice/notice',
          })
        }
      })
    }
   },100)


    
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