import React from 'react'
import Input, { InputProps } from 'antd/lib/input'
import style from './index.less'

const LineInput: React.FC<InputProps> = props => {
  return (
    <span className={`${style['input']} ${props.className}`}>
      <Input bordered={false} {...props}></Input>
    </span>
  )
}

export default React.memo(LineInput)
