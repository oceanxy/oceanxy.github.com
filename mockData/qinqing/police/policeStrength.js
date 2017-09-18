define(function(require) {

    
    var util = require('util')
    
    // 警力分类
    Mock.mock(util.urlReg('qinqing/police/policeStrength'), {
        'code': 1,
        'msg': 'success',
        'result': {
          "policeStrength|5": [
            {
              'name|+1': ['警务通', '摩托车', '其他警车', 'PDT', '巡警'],
              'value|+1': [100, 120, 930, 40, 200]
            }
          ]
          
        }
    })
})