// 使用 Mock
import Mock from 'mockjs'

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|40-100': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      name: '@cname',
      'no|+1': 1,
      'project|+1': 2020020311,
      'authenticate|+1': 7654321,
      unit: '@county(true)',
      status: '扫描|预测|确认阶段'
    }
  ]
})

module.exports = {
  'GET /mock/api/cases': {
    success: true, // 网关层数据返回
    traceId: 'xxxxxxx',
    data
  }
}
