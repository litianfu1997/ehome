// pages/vote/votedetails/votedetalis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approvalHeight:0,
    abstentionHeight:0,
    opposeHeight:0,
  },
  approvalTap(e){
    var h = this.data.approvalHeight;
    h++;
    
    this.setData({
      approvalHeight:h,
    })
    
  },
  
  abstentionTap(e){
    var h = this.data.abstentionHeight;
    h++;
    
    this.setData({
      abstentionHeight:h,
    })
    
  },
  opposeTap(e) {
    var h = this.data.opposeHeight;
    h++;
    
    this.setData({
      opposeHeight: h,
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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