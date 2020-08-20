import React from 'react'
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Upload,
  DatePicker,
  Checkbox,
  Space,
  Divider,
  Button
} from 'antd'
import MyCard from '@/components/Card'
import { InboxOutlined } from '@ant-design/icons'

import style from './index.less'
import LineInput from '@/components/LineInput'
import { Link } from 'umi'

const { Title } = Typography

const NewCase: React.FC = () => {
  const [form] = Form.useForm()

  const normFile = (e: any) => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }

  return (
    <Form className={style['form']} form={form} layout='vertical'>
      <Title level={3}>新建案件</Title>
      <Row gutter={32}>
        <Col flex={1}>
          <MyCard full={1}>
            <Form.Item label='案件名称' name='name' rules={[{ required: true }]}>
              <LineInput></LineInput>
            </Form.Item>
            <Form.Item label='被鉴定人' name='people' rules={[{ required: true }]}>
              <LineInput></LineInput>
            </Form.Item>
            <Form.Item label='检案号' name='no' rules={[{ required: true }]}>
              <LineInput></LineInput>
            </Form.Item>
            <Form.Item label='照片' required>
              <Form.Item
                name='dragger'
                valuePropName='fileList'
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name='photo' action='/upload.do'>
                  <p className='ant-upload-drag-icon'>
                    <InboxOutlined />
                  </p>
                  <p className='ant-upload-text'>点击或拖动照片上传</p>
                  {/* <p className="ant-upload-hint">Support for a single or bulk upload.</p> */}
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </MyCard>
        </Col>
        <Col flex={1}>
          <MyCard full={1}>
            <Form.Item label='检材' required>
              <Space size={16}>
                <Checkbox></Checkbox>肺<LineInput className={style['width-100']}></LineInput>g
              </Space>
              <Divider dashed></Divider>
              <Space size={16}>
                <Checkbox></Checkbox>肝<LineInput className={style['width-100']}></LineInput>g
              </Space>
              <Divider dashed></Divider>
              <Space size={16}>
                <Checkbox></Checkbox>肾<LineInput className={style['width-100']}></LineInput>g
              </Space>
              <Divider dashed></Divider>
              <Space size={16}>
                <Checkbox></Checkbox>水样<LineInput className={style['width-100']}></LineInput>g
              </Space>
              <Divider dashed></Divider>
              <Space size={16}>
                <Checkbox></Checkbox>其它
              </Space>
            </Form.Item>
          </MyCard>
        </Col>
        <Col flex={1}>
          <MyCard full={1}>
            <Form.Item label='涂片数' name='no1' rules={[{ required: true }]}>
              <LineInput></LineInput>
            </Form.Item>
            <Form.Item label='检验人' name='name1' rules={[{ required: true }]}>
              <LineInput></LineInput>
            </Form.Item>
            <Form.Item label='日期' name='date' rules={[{ required: true }]}>
              <DatePicker className={style['width-200']} />
            </Form.Item>
          </MyCard>
        </Col>
      </Row>
      <div className='spacer-2x'></div>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          创建
        </Button>
        <Link to='/app/case/create/upload'>上传数据</Link>
      </Form.Item>
    </Form>
  )
}

export default React.memo(NewCase)
