// pages/userInfo/userInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showXgkx:'',
    nationIndex: '0',//民族默认：请选择民族
    nationArray:[
      {
        id:'00',
        name:'请选择民族'
      },
      {
        id:'01',
        name:'汉族'
      },
      {
        id:'02',
        name:'蒙古族'
      },
      {
        id:'03',
        name:'回族'
      },
      {
        id:'04',
        name:'藏族'
      },
      {
        id:'05',
        name:'维吾尔族'
      },
      {
        id:'06',
        name:'苗族'
      },
      {
        id:'07',
        name:'彝族'
      },
      {
        id:'08',
        name:'壮族'
      },
      {
        id:'09',
        name:'布依族'
      },
      {
        id:'10',
        name:'朝鲜族'
      },
      {
        id:'11',
        name:'满族'
      },
      {
        id:'12',
        name:'侗族'
      },
      {
        id:'13',
        name:'瑶族'
      },
      {
        id:'14',
        name:'白族'
      },
      {
        id:'15',
        name:'土家族'
      },
      {
        id:'16',
        name:'哈尼族'
      },
      {
        id:'17',
        name:'哈萨克族'
      },
      {
        id:'18',
        name:'傣族'
      },
      {
        id:'19',
        name:'黎族'
      },
      {
        id:'20',
        name:'傈僳族'
      },
      {
        id:'21',
        name:'佤族'
      },
      {
        id:'22',
        name:'畲族'
      },
      {
        id:'23',
        name:'高山族'
      },
      {
        id:'24',
        name:'拉祜族'
      },
      {
        id:'25',
        name:'水族'
      },
      {
        id:'26',
        name:'东乡族'
      },
      {
        id:'27',
        name:'纳西族'
      },
      {
        id:'28',
        name:'景颇族'
      },
      {
        id:'29',
        name:'柯尔克孜族'
      },
      {
        id:'30',
        name:'土族'
      },
      {
        id:'31',
        name:'达斡尔族'
      },
      {
        id:'32',
        name:'仫佬族'
      },
      {
        id:'33',
        name:'羌族'
      },
      {
        id:'34',
        name:'布朗族'
      },
      {
        id:'35',
        name:'撒拉族'
      },
      {
        id:'36',
        name:'毛南族'
      },
      {
        id:'37',
        name:'仡佬族'
      },
      {
        id:'38',
        name:'锡伯族'
      },
      {
        id:'39',
        name:'阿昌族'
      },
      {
        id:'40',
        name:'普米族'
      },
      {
        id:'41',
        name:'塔吉克族'
      },
      {
        id:'42',
        name:'怒族'
      },
      {
        id:'43',
        name:'乌孜别克族'
      },
      {
        id:'44',
        name:'俄罗斯族'
      },
      {
        id:'45',
        name:'鄂温克族'
      },
      {
        id:'46',
        name:'德昂族'
      },
      {
        id:'47',
        name:'保安族'
      },
      {
        id:'48',
        name:'裕固族'
      },
      {
        id:'49',
        name:'京族'
      },
      {
        id:'50',
        name:'塔塔尔族'
      },
      {
        id:'51',
        name:'独龙族'
      },
      {
        id:'52',
        name:'鄂伦春族'
      },
      {
        id:'53',
        name:'赫哲族'
      },
      {
        id:'54',
        name:'门巴族'
      },
      {
        id:'55',
        name:'珞巴族'
      },
      {
        id:'56',
        name:'基诺族'
      },
      {
        id:'57',
        name:'其他'
      },
      {
        id:'58',
        name:'外国血统'
      }
    ],//民族下拉值
    originPlace: ['省', '市', '县'],//生源所在地
    nativePlace: ['省','市','县'],//籍贯
    arrivalTime:"YYYY-MM-DD",//预计到校时间
    src:'',//上传的个人证件照路径
    displayImg:true,//点击选择图片和图片的切换展示
    displayReligion:false,//当选择有宗教信仰的时候填写的宗教名称
    name:'',
    sex:'',
    aboutSex:true,//关于性别的赋值
    checkPolitical:'',//政治面貌的赋值
    checkReligion:'',//宗教信仰的赋值
    checkOk:0,//判断信息是否填全
    list:{
      // name:'',//姓名
      sex:'男',//性别
      nation:'',//民族
      // idcard:'',//身份证
      origin:'',//生源所在地
      native:'',//籍贯
      idhome:'',//户籍地址
      home:'',//家庭住址
      postcode:'',//邮编
      phone:'',//个人手机号
      political:'群众',//政治面貌
      fathername:'',//父亲名字
      fatherphone:'',//父亲电话
      mothername:'',//母亲名字
      motherphone:'',//母亲电话
      qq:'',//QQ号
      wechat:'',//微信号
      religion:'否',//是否有宗教信仰
      religionname:''//宗教信仰名称
    },
    Submitted:false,//默认是可以修改的，当提交完成之后不能修改
    imgStatusCode:'',//img提交返回的code，必须是200才能进行一下部
  },
  //姓名
  // nameChange(e){
  //   console.log(e.detail.value);
  //   this.setData({
  //     'list.name':e.detail.value
  //   })
  // },
  //性别
  sexChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.sex':e.detail.value
    })
  },
  //民族
  nationChange(e){
    console.log(e.detail.value);
    this.setData({
      nationIndex: e.detail.value,
      'list.nation':e.detail.value
    })
  },
  //身份证
  // idcardChange(e){
  //   console.log(e.detail.value);
  //   this.setData({
  //     'list.idcard':e.detail.value
  //   })
  // },
  //生源所在地
  originChange(e){
    console.log(e.detail.value);
    this.setData({
      originPlace: e.detail.value,
      'list.origin':e.detail.value
    })
  },
  //籍贯
  nativeChange(e){
    console.log(e.detail.value);
    this.setData({
      nativePlace: e.detail.value,
      'list.native':e.detail.value
    })
  },
  //户籍地址
  idhomeChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.idhome':e.detail.value
    })
  },
  //家庭住址
  homeChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.home':e.detail.value
    })
  },
  //邮编
  postcodeChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.postcode':e.detail.value
    })
  },
  //个人电话
  phoneChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.phone':e.detail.value
    })
  },
  //政治面貌
  politicalChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.political':e.detail.value
    })
  },
  //父亲姓名
  fathernameChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.fathername':e.detail.value
    })
  },
  //父亲电话
  fatherphoneChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.fatherphone':e.detail.value
    })
  },
  //母亲姓名
  mothernameChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.mothername':e.detail.value
    })
  },
  //母亲电话
  motherphoneChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.motherphone':e.detail.value
    })
  },
  qqChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.qq':e.detail.value
    })
  },
  wechartChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.wechat':e.detail.value
    })
  },
  //是否宗教信仰
  religionChange(e){
    console.log(e.detail.value);
    if(e.detail.value == '是'){
      this.setData({
        displayReligion:true,
        'list.religion':e.detail.value
      })
    }else if(e.detail.value == '否'){
      this.setData({
        displayReligion:false,
        'list.religion':e.detail.value
      })
    }
  },
  //宗教名称
  religionNameChange(e){
    console.log(e.detail.value);
    this.setData({
      'list.religionname':e.detail.value
    })
  },
  // //预计报到时间
  // arrivalChange(e){
  //   console.log(e.detail.value);
  //   this.setData({
  //     arrivalTime: e.detail.value
  //   })
  // },
  // //是否延期报到
  // delayChange(e){
  //   console.log(e.detail.value);
  // },
  // //延期报到原因
  // delayreportChange(e){
  //   console.log(e.detail.value);
  // },
  // //交通工具
  // transportationChange(e){
  //   console.log(e.detail.value);
  // },

  //头像：
  chooseImage(e){
    var that = this
    var token = wx.getStorageSync('token')
    var baseUrl = wx.getStorageSync('baseUrl')
    wx.chooseMedia({
      count:1,
      mediaType:['image'],
      sourceType:['album','camera'],
      success:function(res){
        that.setData({
          src:res.tempFiles[0].tempFilePath,
          displayImg:false
        })
        //上传即提交
        wx.uploadFile({
          filePath: res.tempFiles[0].tempFilePath,
          name: 'photo',
          url:baseUrl + 'new/image',
          header:{
            'token':token
          },
          success(e){
            if(e.statusCode == 200){
              console.log('下一步');
              that.setData({
                imgStatusCode:e.statusCode
              })
            }else if(e.statusCode == 413){
              wx.showModal({
                content: '图片过大，请压缩后重新提交',
                showCancel:false,
                success:function(e){
                  that.setData({
                    src:'',
                    displayImg:true
                  })
                }
              })
            }else{
              wx.showModal({
                content: '图片提交失败，请联系管理员',
                showCancel:false,
                success:function(e){
                  console.log(e);
                }
              })
            }
          }
        })
      }
    })
  },
  //提交信息前的信息是否填写检查
  checkInfo(){
    var list = this.data.list
    var checkOk = 0
    if(this.data.src == ''){
      wx.showToast({
        title: '请选择您的证件照',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }
    
    if(list.religion == '是'){
      if(list.religionname == ''){
        wx.showToast({
          title: '请输入您信仰的宗教名称',
          icon: 'none',
        })
      }else{
        ++checkOk;
      }
    }else{
      ++checkOk;
    }

    if(list.religion == ''){
      wx.showToast({
        title: '请选择您是否有宗教信仰',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    if(list.qq == ''){
      wx.showToast({
        title: '请输入您的QQ号',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    if(list.motherphone != ''){
      if(list.mothername == ''){
        wx.showToast({
          title: '请输入您母亲的姓名',
          icon: 'none',
        })
      }else if(list.mothername !=''){
        var mothernameTest = /[\u4E00-\u9FA5\uf900-\ufa2d]/;
        if(!mothernameTest.test(list.mothername)){
          wx.showToast({
            title: '母亲姓名格式填写错误',
            icon: 'none',
          })
        }else{
          ++checkOk;
        }
      }
    }

    if(list.mothername != ''){
      if(list.motherphone == ''){
        wx.showToast({
          title: '请输入您母亲的电话',
          icon: 'none',
        })
      }else if(list.motherphone !=''){
        var motherphoneTest = /^1[34578]\d{9}$/;
        if(!motherphoneTest.test(list.motherphone)){
          wx.showToast({
            title: '母亲电话格式填写错误',
            icon: 'none',
          })
        }else{
          ++checkOk;
        }
      }
    }

    if(list.fatherphone != ''){
      if(list.fathername == ''){
        wx.showToast({
          title: '请输入您父亲的姓名',
          icon: 'none',
        })
      }else if(list.fathername != ''){
        var fathernameTest = /[\u4E00-\u9FA5\uf900-\ufa2d]/;
        if(!fathernameTest.test(list.fathername)){
          wx.showToast({
            title: '父亲姓名格式填写错误',
            icon: 'none',
          })
        }else{
          ++checkOk;
        }
      }
    }

    if(list.fathername != ''){
      if(list.fatherphone == ''){
        wx.showToast({
          title: '请输入您父亲的电话',
          icon: 'none',
        })
      }else if(list.fatherphone != ''){
        var fatherphoneTest = /^1[34578]\d{9}$/;
        if(!fatherphoneTest.test(list.fatherphone)){
          wx.showToast({
            title: '父亲电话格式填写错误',
            icon: 'none',
          })
        }else{
          ++checkOk;
        }
      }
    }

    if(list.fathername == ''){
      if(list.mothername == ''){
        wx.showToast({
          title: '父母亲的名字至少填写一个',
          icon: 'none',
        })
      }
    }

    if(list.mothername == ''){
      if(list.fathername == ''){
        wx.showToast({
          title: '父母亲的名字至少填写一个',
          icon: 'none',
        })
      }
    }

    if(list.political == ''){
      wx.showToast({
        title: '请选择您的政治面貌',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    if(list.phone == ''){
      wx.showToast({
        title: '请输入您的个人电话',
        icon: 'none',
      })
    }else if(list.phone != ''){
      var phoneTest = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if(!phoneTest.test(list.phone)){
        wx.showToast({
          title: '个人电话格式填写错误',
          icon: 'none',
        })
      }else{
        ++checkOk;
      }
    }

    if(list.postcode == ''){
      wx.showToast({
        title: '请输入您地区的邮编',
        icon: 'none',
      })
    }else if(list.postcode != ''){
      var postcodeTest = /^\d{6}$/;
      if(!postcodeTest.test(list.postcode)){
        wx.showToast({
          title: '邮编格式填写错误',
          icon: 'none',
        })
      }else{
        ++checkOk;
      }
    }

    if(list.home == ''){
      wx.showToast({
        title: '请输入您的家庭住址',
        icon: 'none',
      })
    }else if(list.home){
      var homeTest = /[\u4E00-\u9FA5\uf900-\ufa2d]/;
      if(!homeTest.test(list.home)){
        wx.showToast({
          title: '家庭住址格式填写错误',
          icon: 'none',
        })
      }else{
        ++checkOk;
      }
    }

    if(list.idhome == ''){
      wx.showToast({
        title: '请输入您的户籍地址',
        icon: 'none',
      })
    }else if(list.idhome){
      var idhomeTest = /[\u4E00-\u9FA5\uf900-\ufa2d]/;
      if(!idhomeTest.test(list.idhome)){
        wx.showToast({
          title: '户籍地址格式填写错误',
          icon: 'none',
        })
      }else{
        ++checkOk;
      }
    }

    if(list.native == ''){
      wx.showToast({
        title: '请选择您的籍贯',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    if(list.origin == ''){
      wx.showToast({
        title: '请选择您的生源所在地',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    if(list.nation == '' || list.nation == 0){
      wx.showToast({
        title: '请选择您的民族',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    if(list.sex == ''){
      wx.showToast({
        title: '请选择您的性别',
        icon: 'none',
      })
    }else{
      ++checkOk;
    }

    console.log(checkOk);
    //对用户提交的信息进行判断来提交看，父母全填checkok为17，父母双方正常填一个的信息为15，四个空填三个也是15，所以有个判断
    if(checkOk == 15){
      var list = this.data.list
      if(list.mothername !='' && list.motherphone != '' && list.fathername == '' && list.fatherphone == ''){
        this.setData({
          checkOk:checkOk
        })
      }
      if(list.mothername =='' && list.motherphone == '' && list.fathername != '' && list.fatherphone != ''){
        this.setData({
          checkOk:checkOk
        })
      }
    }
    if(checkOk == 17){
      this.setData({
        checkOk:checkOk
      })
    }

  },

  //提交信息
  submit(res){
    console.log(this.data.list);
    var that = this
    var token = wx.getStorageSync('token')
    var baseUrl = wx.getStorageSync('baseUrl')
    wx.request({
      url: baseUrl + 'new/student',
      method:'GET',
      header:{
        'token':token
      },
      success(e){
        //fasle：没提交
        if(e.data.have_info == false){
          that.checkInfo();
          if(that.data.checkOk == 15 || that.data.checkOk == 17){       
            // var that = this
            if(that.data.imgStatusCode == 200){
              wx.request({
                url: baseUrl+ 'new/info/',
                method:'POST',
                header:{
                  'token':token
                },
                data:that.data.list,
                success(e){
                  if(e.statusCode == 200){
                    wx.showModal({
                      content: '信息上传成功',
                      showCancel:false,
                      success:function(e){
                        that.onShow()
                      }
                    })
                  }else{
                    wx.showModal({
                      content: '信息提交失败，请联系管理员',
                      showCancel:false,
                      success:function(e){
                        console.log(e);
                      }
                    })
                  }
                },
                fail:function(e){
                  console.log(e);
                }
              })
            }
          }
        }else{
          wx.showModal({
            content: '您已经提交过了，无需重复提交',
            showCancel:false,
            success(res){
              console.log(res);
            }
          })
        }
      }
    })
  },

  //修改提交信息
  modify(){
    var token = wx.getStorageSync('token')
    var baseUrl = wx.getStorageSync('baseUrl')
    var that = this
    wx.request({
      url: baseUrl + 'new/info/all/',
      method:'DELETE',
      header:{
        'token':token
      },
      success:function(e){
        console.log(e);
        if(e.statusCode == 200 || e.statusCode == 404){
          if(e.data.msg == '没有信息'){
            wx.showModal({
              content: '请先提交信息',
              showCancel:false,
              success(e){
                console.log(e);
              }
            })
          }else{
            wx.showModal({
              content: '请重新提交您的信息',
              showCancel:false,
              success:function(e){
                that.setData({
                  Submitted:false,
                  src:'',
                  displayImg:true,
                  nationIndex:0,
                  originPlace: ['省', '市', '县'],//生源所在地
                  nativePlace: ['省','市','县'],//籍贯
                  'list.nation':'',
                  'list.idhome':'',
                  'list.home':'',
                  'list.native':'',
                  'list.origin':'',
                  'list.postcode':'',
                  'list.phone':'',
                  'list.fathername':'',
                  'list.fatherphone':'',
                  'list.mothername':'',
                  'list.motherphone':'',
                  'list.qq':'',
                  'list.wechat':'',
                  'list.religionname':'',
                  checkOk:0
                })
              }
            })
          }
        }
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
    console.log('onshow');
    this.setData({
      showXgkx:app.globalData.showXgkx
    })

    var name = wx.getStorageSync('name')
    var idcard = wx.getStorageSync('idcard')
    this.setData({
      name:name,
      idcard:idcard
    })


     //获取信息
     var that = this
     var baseUrl = wx.getStorageSync('baseUrl')
     var token = wx.getStorageSync('token')
    //先判断他有没有提交信息
     wx.request({
      url: baseUrl+ 'new/student',
      method:'get',
      header:{
        'token':token
      },
      success(e){
        if(e.data.have_info == true){
          wx.request({
            url: baseUrl + 'new/info/',
            method:'GET',
            header:{
              'token':token,
            },
            success(e){
              console.log(e);
              if(e.statusCode == 200){
                 //个别特殊的判断赋值
                //性别：
                if(e.data.sex == '男'){
                  that.setData({
                    aboutSex:true
                  })
                }else{
                  that.setData({
                    aboutSex:false
                  })
                }
      
                //政治面貌：
                if(e.data.political_landscape == '共青团员'){
                  that.setData({
                    checkPolitical:true
                  })
                }else{
                  that.setData({
                    checkPolitical:false
                  })
                }
      
                //宗教信仰：
                if(e.data.the_religion == false){
                  that.setData({
                    checkReligion:false,
                    displayReligion:false
                  })
                }else{
                  that.setData({
                    checkReligion:true,
                    displayReligion:true
                  })
                }
      
                that.setData({
                  nationIndex:e.data.ethnic,
                  originPlace:e.data.origin,
                  nativePlace:e.data.native_place,
                  'list.idhome':e.data.household_address,
                  'list.home':e.data.detailed_address,
                  'list.postcode':e.data.postcode,
                  'list.phone':e.data.phone_number,
                  'list.fathername':e.data.father_name,
                  'list.fatherphone':e.data.father_phone,
                  'list.mothername':e.data.mother_name,
                  'list.motherphone':e.data.mother_phone,
                  'list.qq':e.data.qq,
                  'list.wechat':e.data.wechat,
                  'list.religionname':e.data.religion,
                  Submitted:true
                })
              }
             
            }
          })
          //获取证件照
          wx.request({
            url: baseUrl + 'new/info/img/',
            method:'GET',
            header:{
              'token':token
            },
            success(img){
              console.log(img);
              if(img.statusCode == 200 && img.data.photo !="static/none.jpg"){
                that.setData({
                  src:baseUrl+img.data.photo,
                  displayImg:false,
                })
              }
            },
            fail:function(e){
              console.log(e);
            }
          })
        }
      }
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