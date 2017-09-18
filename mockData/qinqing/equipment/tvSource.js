/**
 * 设备视频来源
 * time 2017-09-08
 * edit tanjun
 */
define(function(require){
	require('mock');
	var util = require('common/util');

	Mock.mock(util.urlReg('equipment/tvsource'),{
		code: 1,
		msg: 'success',
		result: {
			tvsource: {
				'source|2':[
					{
						'name|+1': ['应指','交巡警'],
						'value|100-1000': 1
					}
				],
				'brand|5':[
					{
						'name|+1': '@cname',
						'value|100-500': 1
					}
				]
			}
		}
	})
})