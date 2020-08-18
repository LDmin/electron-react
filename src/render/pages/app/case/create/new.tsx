import React from 'react'
import { Typography, Row, Col } from 'antd';
import MyCard from '@/components/Card';

const { Title } = Typography;

const NewCase: React.FC = () => {
  return (
    <>
      <Title level={2}>新建案件</Title>
      <Row gutter={32}>
        <Col span={8}>
          <MyCard>
            123
          </MyCard>
        </Col>
        <Col span={8}>
          <MyCard>
            123
          </MyCard>
        </Col>
        <Col span={8}>
          <MyCard>
            123
          </MyCard>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(NewCase)
