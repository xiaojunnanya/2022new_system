// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showXgkx:''
  },

  //信息采集
  getUserInfo(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/userInfo/userInfo',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(
      "\n" +
        "                                 _____                   _____                                 \n" +
        "        ______                  /\\    \\                 /\\    \\                ______          \n" +
        "       |::|   |                /::\\    \\               /::\\____\\              |::|   |         \n" +
        "       |::|   |               /::::\\    \\             /:::/    /              |::|   |         \n" +
        "       |::|   |              /::::::\\    \\           /:::/    /               |::|   |         \n" +
        "       |::|   |             /:::/\\:::\\    \\         /:::/    /                |::|   |         \n" +
        "       |::|   |            /:::/  \\:::\\    \\       /:::/____/                 |::|   |         \n" +
        "       |::|   |           /:::/    \\:::\\    \\     /::::\\    \\                 |::|   |         \n" +
        "       |::|   |          /:::/    / \\:::\\    \\   /::::::\\____\\________        |::|   |         \n" +
        " ______|::|___|___ ____ /:::/    /   \\:::\\ ___\\ /:::/\\:::::::::::\\    \\ ______|::|___|___ ____ \n" +
        "|:::::::::::::::::|    /:::/____/  ___\\:::|    /:::/  |:::::::::::\\____\\:::::::::::::::::|    |\n" +
        "|:::::::::::::::::|____\\:::\\    \\ /\\  /:::|____\\::/   |::|~~~|~~~~~    |:::::::::::::::::|____|\n" +
        " ~~~~~~|::|~~~|~~~      \\:::\\    /::\\ \\::/    / \\/____|::|   |          ~~~~~~|::|~~~|~~~      \n" +
        "       |::|   |          \\:::\\   \\:::\\ \\/____/        |::|   |                |::|   |         \n" +
        "       |::|   |           \\:::\\   \\:::\\____\\          |::|   |                |::|   |         \n" +
        "       |::|   |            \\:::\\  /:::/    /          |::|   |                |::|   |         \n" +
        "       |::|   |             \\:::\\/:::/    /           |::|   |                |::|   |         \n" +
        "       |::|   |              \\::::::/    /            |::|   |                |::|   |         \n" +
        "       |::|   |               \\::::/    /             \\::|   |                |::|   |         \n" +
        "       |::|___|                \\::/____/               \\:|   |                |::|___|         \n" +
        "        ~~                                              \\|___|                 ~~              \n" +
        "                                                                                               \n" +
        "powered by :XGKX\n"
    );

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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

    var a = 1
    if(1 == 2){
      console.log('1=2');
    }else{
      console.log(++a);
      // a = a+1
    }

    if(1==3){
      console.log('1=3');
    }else{
      console.log(++a);
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})