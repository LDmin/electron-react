import React, { Fragment } from 'react'

import stepWait from '../../assets/image/step-wait.png'
import stepFinish from '../../assets/image/step-finish.png'
import style from './index.less'

interface IProps {
  options: IStepsOptions
  currentStep: number
  onClick?: (currentStep: IProps['currentStep']) => void
}

const Steps: React.SFC<IProps> = ({ options, currentStep }) => {
  return (
    <div className={style['steps']}>
      {options.map((item, index) => {
        const isActive = currentStep >= index

        return (
          <Fragment key={item.url}>
            <div className={`${style['step']} ${isActive ? style['active'] : ''}`} key={item.url}>
              {item.text}
            </div>
            {index !== options.length - 1 && (
              <div className={`${style['connect']} ${isActive ? style['active'] : ''}`}></div>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export default React.memo(Steps)
