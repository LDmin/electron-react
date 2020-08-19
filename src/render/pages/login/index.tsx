import React from 'react'
import { Form, Typography, Input } from 'antd'
import Button from '@/components/Button'

import style from './index.less'
import { useCreation, usePersistFn } from 'ahooks'
import { useHistory } from 'umi'

const { Title } = Typography

interface IProps {}

const Login: React.SFC<IProps> = () => {
  const history = useHistory()

  const onFinish = usePersistFn(() => {
    history.push('/app/case/list')
  })

  return (
    <div className={style['wrapper']}>
      <Title level={3} className='t-c'>
        欢迎登陆
      </Title>
      <Form className={style['form']} name='login' onFinish={onFinish}>
        <Form.Item name='username' rules={[{ required: true, message: '请输入您的用户名!' }]}>
          <Input placeholder='用户名' bordered={false} />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: '请输入您的密码!' }]}>
          <Input.Password placeholder='密码' bordered={false} />
        </Form.Item>

        <Form.Item>
          <div className='spacer-4x'></div>
          <Button htmlType='submit' block size='large'>
            登陆系统
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default React.memo(Login)
