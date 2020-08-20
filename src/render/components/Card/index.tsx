import { Card } from 'antd'
import * as React from 'react'

import style from './index.less'
import { CardProps } from 'antd/lib/card'

interface IProps extends CardProps {
  full?: 1 | 0
}

const MyCard: React.FC<IProps> = props => (
  <Card
    className={`${style['card']} ${props.full ? style['full'] : ''}`}
    bordered={false}
    {...props}
  >
    {props.children}
  </Card>
)

export default MyCard
