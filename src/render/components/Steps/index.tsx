import React from 'react'

import style from './index.less'

interface IProps {
  options: IStepsOptions
  currentStep: number
  setCurrentStep?: (currentStep: IProps['currentStep']) => void
}

const itemcpn = (item: IStepsItem, index: number) => (
  <div className={style['step']} key={item.url}>
    {item.text}
  </div>
)

const Steps: React.SFC<IProps> = ({ options }) => {
  return <div className={style['steps']}>{options.map(itemcpn)}</div>
}

export default React.memo(Steps)
