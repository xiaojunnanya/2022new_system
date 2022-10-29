// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',//姓名
    imgUrl:'',//头像
    noLogin:true,//登录的展示
    showXgkx:''
  },
  login(){
    var that = this
    wx.getUserProfile({
      desc: '授权信息不做其他用途',
      success:function(e){
        //个人信息缓存
        wx.setStorageSync('userInfo', e.userInfo);

        //登录，传code，获取bound：true代表绑定，false未绑定
        wx.login({
          success:function(res){
            console.log("res.code:");
            console.log(res.code);
            wx.setStorageSync('baseUrl', 'https://vip.jzab.xyz/')
            const baseUrl = wx.getStorageSync('baseUrl')
            wx.request({
              url:baseUrl + 'new/student/login/',
              data: {
                code:res.code
              },
              method: 'POST',
              success:(res)=>{
                console.log(res);
                if(res.statusCode == 200){
                  //fasle：跳转
                  if(res.data.bound == false){
                    wx.navigateTo({
                      url:'/pages/binding/binding'
                    })
                  }
                  //true
                  if(res.data.bound == true){
                    wx.setStorageSync('token', res.data.token)
                    wx.setStorageSync('name', res.data.name)
                    wx.setStorageSync('idcard', res.data.student_number)
                    //更改名字和头像
                    that.setData({
                      name:res.data.name,
                      imgUrl:e.userInfo.avatarUrl,
                      noLogin:false
                    })
                  }
                }else{
                  wx.showModal({
                    content: '授权失败，请稍后重试',
                    showCancel:false,
                  })
                }
              },
              fail:function(e){
                console.log(e);
              }
            })
          }
        })

      },
      fail:function(e){
        console.log(e);
      }
    })
  },
   //退出登录 清除缓存
   clear:function(){
    wx.showModal({
      content:'退出登录将清除所有信息，确定退出登录吗',
      success: function (res) {
          //跳转到首页，强制重启
          if (res.confirm) {
            wx.reLaunch({
                url: '/pages/user/user',
            })
            wx.clearStorageSync();//清除缓存
          }
      },
    })
  },

  //扫码
  scanCode:function(e){
    var baseUrl = wx.getStorageSync('baseUrl')
    var token = wx.getStorageSync('token')

    wx.scanCode({
      scanType:'scanCode',
      success:function(res){
        console.log(res);
        console.log(res.result);
        wx.request({
          url: baseUrl + 'new/student/check_in/',
          data:{
            'code':res.result
          },
          method:'post',
          header:{
            'token':token
          },
          success:function(e){
            console.log(e);
            console.log(e.data.msg);
            wx.showToast({
              title: e.data.msg,
              icon:'none'
            })
          },
          fail:function(e){
            console.log(e);  
          }
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
    console.log(app.globalData.showXgkx);
    this.setData({
      showXgkx:app.globalData.showXgkx
    })

    //如果有token，展示信息页面
    var token  = wx.getStorageSync('token')
    var userInfo = wx.getStorageSync('userInfo')
    var name = wx.getStorageSync('name')
    if(token){
      this.setData({
        name:name,
        imgUrl:userInfo.avatarUrl,
        noLogin:false
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