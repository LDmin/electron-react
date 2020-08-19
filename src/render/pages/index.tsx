import React, { FC, useEffect } from 'react'
import './index.less'
import { Link, history } from 'umi'

const Root: FC = props => {
  useEffect(() => {
    history.push('/login')
    window.stopLoading()
  }, [])

  return <div>loading...</div>
}

export default Root
