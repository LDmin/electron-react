import React from 'react'
import Card from '@components/Card'
import { Row, Col, Typography, Table, Button } from 'antd'
import { useRequest, Link } from 'umi'
import { useCreation } from 'ahooks'
import { API_PREFIX } from '@src/config'

const { Title } = Typography

const CaseList: React.FC = () => {
  const { tableProps, params, refresh } = useRequest(
    ({ current, pageSize, sorter: s, filters: f }) => {
      const p: any = { current, pageSize }
      if (s?.field && s?.order) {
        p[s.field] = s.order
      }
      if (f) {
        Object.entries(f).forEach(([filed, value]) => {
          p[filed] = value
        })
      }
      return `${API_PREFIX}/cases`
    },
    {
      paginated: true,
      defaultPageSize: 5
    }
  )

  const columns = useCreation(
    () => [
      {
        title: '编号',
        dataIndex: 'no',
        key: 'no'
      },
      {
        title: '项目号',
        dataIndex: 'project',
        key: 'project'
      },
      {
        title: '鉴定号',
        dataIndex: 'authenticate',
        key: 'authenticate'
      },
      {
        title: '委托单位',
        dataIndex: 'unit',
        key: 'unit'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
      }
    ],
    []
  )

  console.log(tableProps)
  tableProps.pagination.pageSize = 6
  tableProps.pagination.showSizeChanger = false
  tableProps.pagination.showQuickJumper = true

  return (
    <Card>
      <Row align='top'>
        <Col flex='auto'>
          <Title level={3}>案件列表</Title>
        </Col>
        <Col>
          <Link to='/app/case/create/new'>
            <Button type='primary'>+ 添加案件</Button>
          </Link>
        </Col>
      </Row>
      <Table columns={columns} {...tableProps} rowKey='id' />
    </Card>
  )
}

export default React.memo(CaseList)
