// pages/game/game.js
const utils = require('../../utils/util.js');

Page({
  data: {
    game: 'game',
    leaderboard: {},
    integral: 0,
    name: '点击按钮开始博饼',
    score: 0,
    image_1: '../../images/shaizi_1.png',
    image_2: '../../images/shaizi_2.png',
    image_3: '../../images/shaizi_3.png',
    image_4: '../../images/shaizi_4.png',
    image_5: '../../images/shaizi_5.png',
    image_6: '../../images/shaizi_6.png',
    move_1: '',
    move_2: '',
    move_3: '',
    move_4: '',
    move_5: '',
    move_6: '',
    visable_1: false,
    actions_1: [{
      name: '确定'
    }],
    maskShow: true,
    openid: null,
    session_key: null,
    zhezhao: "none",
    sucplay: "none",
    telplay: "block",
    zqtel: null,
    play_btn: false,
    zhezhao_show:"none",
    result_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: async function (options) {
    // try {
    //   const tel = wx.getStorageSync('zqtel')
    //   if (tel) {
    //     this.getresult(tel);
    //     this.setData({
    //       sucplay: "block",
    //       telplay: "none",
    //       zqtel: tel
    //     })
    //   } else {
    //     this.getLogin();
    //     wx.showLoading({
    //       title: '加载中',
    //       mask: true
    //     })
    //   }
    // } catch (e) {}

    // this.star_game()

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
    // setTimeout(() => {
    //   this.setData({
    //     maskShow: false
    //   })
    //   wx.hideLoading()
    // }, 1000)
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
    return {
      title: '铂爵旅拍 中秋佳节博个好彩头',
      path: '/pages/game/zhongqiu',
      imageUrl: 'https://bojueapp.oss-cn-hangzhou.aliyuncs.com/xcx/flg/zq/zhuan_zq.jpg?'+ Math.random() / 9999,
    }
  },

  // onComponentsShow() {
  //   this.bottomNavigation = this.selectComponent("#game")
  //   this.bottomNavigation._displayShow()
  // },

  async gameStart(e) {
    var that = this
        that.gameStartFunc();
        that.setData({
          sucplay: "block",
          telplay: "none",
        })
  },

  async gameSucstar() {
    var that = this;
    that.gameStartFunc();
  },

  async gameStartFunc() {

    var that = this;
    that.setData({
      play_btn: true,
    })
    var game_list = utils.star_game();
    that.setData({
      move_1: 'image-1',
      move_2: 'image-2',
      move_3: 'image-3',
      move_4: 'image-4',
      move_5: 'image-5',
      move_6: 'image-6'
    })
    that.setData({
      // score: resphone.data.score,
      image_1: "../../images/shaizi_" + game_list['num'][0] + ".png",
      image_2: "../../images/shaizi_" + game_list['num'][1] + ".png",
      image_3: "../../images/shaizi_" + game_list['num'][2] + ".png",
      image_4: "../../images/shaizi_" + game_list['num'][3] + ".png",
      image_5: "../../images/shaizi_" + game_list['num'][4] + ".png",
      image_6: "../../images/shaizi_" + game_list['num'][5] + ".png",
    })
    setTimeout(() => {
      that.setData({
        move_1: '',
        move_2: '',
        move_3: '',
        move_4: '',
        move_5: '',
        move_6: '',
      })
      setTimeout(() => {
        // wx.showToast({
        //   title: game_list['name'],
        //   icon: 'success',
        //   duration: 2000
        // })
        that.setData({
          name: game_list['name'],
        })
      }, 100)
    }, 1000)
    setTimeout(() => {
      that.setData({
        play_btn: false,
        zhezhao:"block",
      })
    }, 2000)
    
  },

  focusClick_1({
    detail
  }) {
    this.setData({
      visable_1: false
    })
  },
  close_win:function(){
    var that=this;
    that.setData({
      zhezhao:"none",
    })
  },
  into_rules:function(){
    wx.navigateTo({
      url: '/pages/game/rules',
    })
  },
  show_result:function(){
    var that=this;
    const tel = wx.getStorageSync('zqtel')
    if (tel) {
      this.getresult(tel);
    }
    that.setData({
      zhezhao_show:"flex",
    })
    
  },
  close_result:function(){
    var that=this;
    that.setData({
      zhezhao_show:"none",
    })
  },


})