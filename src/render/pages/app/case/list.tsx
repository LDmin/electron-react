import React from 'react'
import Card from '@components/Card'
import { Row, Col, Typography, Button, Table } from 'antd'
import { useRequest } from 'umi'

const { Title } = Typography

interface IProps {}

const CaseList: React.SFC<IProps> = () => {
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
      console.log(p)
      return `/mock/api/cases`
    },
    {
      paginated: true,
      defaultPageSize: 5
    }
  )

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ]

  const columns = [
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
  ]

  return (
    <Card>
      <Row>
        <Col flex='auto'>
          <Title level={2}>案件列表</Title>
        </Col>
        <Col>
          <Button>+ 添加案件</Button>
        </Col>
      </Row>
      <Table columns={columns} {...tableProps} rowKey='id' />
    </Card>
  )
}

export default React.memo(CaseList)
