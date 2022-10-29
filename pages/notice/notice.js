// pages/notice/notice.js
const { $Message } = require('../../iViewUI/base/index');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     cur:0, //默认是第一张选中变大
     list:[],//轮播图数据
     baseUrl:'https://vip.jzab.xyz/',
     name:'访客',
     info:'',
     showXgkx:'',
     item:'',
  },
  //轮播图
  swiperChange:function(e){
    this.setData({
      cur:e.detail.current
    })
  },
  notice(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/detailNotice/detailNotice',
      success:function(res){
        res.eventChannel.emit('detailNotice',{
          item:e.target.dataset.item
        })
      }
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      showXgkx:app.globalData.showXgkx
    })
    
    //轮播图数据的获取
    var that = this
    var token = wx.getStorageSync('token')
    var baseUrl = that.data.baseUrl
    //轮播图
    wx.request({
      url:baseUrl + 'notice/lbt',
      method:'post',
      success:function(e){
        console.log(e.data);
        that.setData({
          list:e.data
        })
      },
      fail:function(e){
        $Message({
          content: '请求数据错误，请稍后重试',
          type: 'warning'
        });
      }
    })
    //通知
    wx.request({
      url:baseUrl + 'notice/',
      method:'GET',
      header:{
        'token':token
      },
      success(e){
        console.log(e);
        var arr = e.data.reverse();
        that.setData({
          info:arr
        })
        console.log(that.data.info);
      }
    })

    //访客和姓名的转换
    var name = wx.getStorageSync('name')
    if(name){
      that.setData({
        name:name
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
    wx.showNavigationBarLoading()//标题旁边的刷新动画
    this.onShow()
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(function(){
      wx.hideNavigationBarLoading();//停掉标题旁动画
      wx.hideLoading();//停掉 加载中。。。动画
      wx.stopPullDownRefresh()//停止下拉刷新
    },2000)
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