/**
 * @Author XieYang
 * @DateTime 2017/8/31 13:26
 * @Description 涉疆模块
 */

define(function (require) {
    require('jquery')
    var request = require('request')
    var baseConfig = require('baseConfig')
    var util = require('util')

    //图表
    var pcsChart = require('popCatStaChart')
    var ptrChart = require('perTypeRatioChart')
    var jnChart = require('junctionNameChart')
    var drpChart = require('regPerDistributionChart')

    //Mock数据
    require('xinJiangData')

    var time = baseConfig.TIME.toString() //时间参数
    var tpl = require('../../../templates/sheqing/xinJiang/index.tpl')

    return {
        /**
         * 初始化
         */
        init: function () {
            /**
             * 当缩放页面后，进行相应的缩放
             */
            window.addEventListener('resize', function () {
                util.zoom()
            })

            util.zoom()

            this.getApi(time)
        },

        /**
         * 渲染模版
         */
        render: function () {
            $('.xinJiang').html(tpl)
        },

        /**
         * 渲染人群类别统计图
         *
         * @param {array} data 列表数据
         *
         */
        renderPCS: function (data) {
            pcsChart.init(data)
        },

        /**
         * 渲染涉疆人员类型比例图
         *
         * @param {array} data 列表数据
         *
         */
        renderPTR: function (data) {
            var dataset = [], name = []
            $.each(data, function (i, e) {
                dataset.push(e.value)
                name.push(e.name)
            })

            ptrChart.drawCharts('.perTypeRatio', [dataset, name], {
                width: 1020,
                height: 700,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                min: 0,
                max: 7, // 限制平分最多个数
                scale: 0.6, // 用于控制平分后圆的大小
                outerRadius: 212,
                innerRadius: 166,
                color: ['#38f3ff', '#ffef3d'],
                stroke: '#202640',
                strokeWidth: 15
            })
        },

        /**
         * 渲染交通路口涉疆车辆流量 Top5
         *
         * @param {array} data 列表数据
         *
         */
        renderJN: function (data) {
            jnChart.drawCharts('.junctionName', data, {
                width: 1100,
                height: 600,
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 60,
                    left: 0
                },
                xText: {
                    fontSize: 40,
                    fill: '#a5cfe0',
                    textAnchor: 'middle',
                    margin: {
                        left: 0,
                        bottom: 5
                    }
                }
            })
        },

        /**
         * 渲染涉疆人员数量地区分布情况图
         *
         * @param {array} data 列表数据
         *
         */
        renderDRP: function (data) {
            drpChart.init(data)
        },

        /**
         * 渲染时间
         */
        renderTime: function () {
            var self = this

            this.getDate()

            setInterval(function () {
                self.getDate()
            }, 1000)
        },

        /**
         * 获取时间
         */
        getDate: function () {
            var date
            if (time) {
                var index = time.indexOf('星')
                $('.date').text(time.slice(0, index))

            } else {
                date = new Date()
                $('.date').text(this.formateDate(date.getHours()) + ':' + this.formateDate(date.getMinutes()) + ':' + this.formateDate(date.getSeconds()))
            }
        },

        /**
         * 格式化时间
         * @param t 时间字符串
         * @returns {*}
         */
        formateDate: function (t) {
            if (t < 10) {
                return '0' + t
            }
            return t
        },

        /**
         * 调用接口
         * @param time 时间
         */
        getApi: function (time) {
            var self = this

            self.render()

            request.sendAjax(baseConfig.popCatStatistics + time, function (data) {
                if (data && data.popCatStatistics) {
                    self.renderPCS(data.popCatStatistics)
                }

            })

            request.sendAjax(baseConfig.regPerDistribution + time, function (data) {
                if (data && data.regPerDistribution) {
                    self.renderDRP(data.regPerDistribution)
                }
            })

            request.sendAjax(baseConfig.perTypeRatio + time, function (data) {
                if (data && data.perTypeRatio) {
                    self.renderPTR(data.perTypeRatio)
                }
            })

            request.sendAjax(baseConfig.junctionName + time, function (data) {
                if (data && data.junctionName) {
                    var dataset = []
                    $.each(data.junctionName, function (i, e) {
                        if (i === 5) {
                            return false
                        }
                        dataset.push(e)
                    })
                    self.renderJN(dataset)
                }
            })

            //self.renderTime()
            //调用服务器时间
            // request.sendWebSocket(baseConfig.timewebsocket, function (data) {
            //     if (data) {
            //         self.renderTime(data)
            //     }
            // })
        }
    }
})