define(function(require) {

    
    var util = require('util')
    
    // 警员年龄段分布
    Mock.mock(util.urlReg('qinqing/police/policeAge'), {
        'code': 1,
        'msg': 'success',
        'result': {
          "policeAge|4": [
            {
              'name|+1': ['41-50', '51-60', '31-40', '3-31'],
              'value|100-1000': 1
            }
          ]
          
        }
    })
})