import React, { FC, useEffect } from 'react'
import './index.less'
import { Link, history } from 'umi'

const Root: FC = props => {
  useEffect(() => {
    history.push('/app/case/list')
    window.stopLoading()
  }, [])

  return ' '
}

export default Root
