/**
 * @Author:      zhanghq
 * @DateTime:    2017-09-11 14:13:24
 * @Description: 顶部（警力分类、警车类型、警员年龄段分布）
 * @Last Modified By:   zhanghq
 * @Last Modified Time:    2017-09-11 14:13:24
 */

define(function(require) {
  // 引入模版库文件
  require('handlebars')
  // 饼图图表组件
  var pieCharts = require('personTypePie')
  // 饼图配置项
  var config = {
    width: 1064,
    height: 763,
    itemStyle: {
      innerRadius: 135,
      outerRadius: 180,
      colors: ['#38f3ff', '#fff838', '#da2c59', '#4088ff', '#9f2cda'],
      ratio: false
    },
    text: {
      fontSize: 40
    }
  }


  /**
   *  加载tpl模板
   */
  function loadTemplate() {
    var tpl = require('../../../templates/qinqing/police/top.tpl')
    var myTemplate = Handlebars.compile(tpl)
    $('.page-top').html(myTemplate)
  }

  /**
   *  渲染警力分类
   *  @param    {[type]}  data [description]
   */
  function renderPoliceStrength(data) {
    pieCharts.drawCharts('.police-strength-charts', data, config)
  }

  /**
   *  渲染警车类型
   *  @param    {[type]}  data [description]
   *  @return   {[type]}  [description]
   */
  function renderPoliceCar(data) {
    pieCharts.drawCharts('.police-car-charts', data, config)
  }

  /**
   *  渲染警员年龄段分布
   *  @param    {[type]}  data [description]
   *  @return   {[type]}  [description]
   */
  function renderPoliceAge(data) {
    var config = {
      width: 1064,
      height: 763,
      itemStyle: {
        innerRadius: 135,
        outerRadius: 180,
        colors: ['#38f3ff', '#fff838', '#da2c59', '#9f2cda', '#9f2cda'],
        ratio: false
      },
      text: {
        fontSize: 40
      }
    }
    // 渲染组件
    pieCharts.drawCharts('.police-age-charts', data, config)
  }

 /**
   *  返回方法页面调用
   */
  var result = {
      loadTemplate: loadTemplate,
      renderPoliceStrength: renderPoliceStrength,
      renderPoliceCar: renderPoliceCar,
      renderPoliceAge: renderPoliceAge
  }
  return result

})