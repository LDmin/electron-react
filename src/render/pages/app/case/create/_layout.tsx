import React, { useEffect } from 'react'
import Steps from '@/components/Steps'

import style from './_layout.less'
import { useModel, useLocation } from 'umi'

const CreateLayout: React.FC = props => {
  const location = useLocation()
  const { options, currentStep, setCurrentStepByUrl } = useModel('steps', model => ({
    options: model.options,
    currentStep: model.currentStep,
    setCurrentStepByUrl: model.setCurrentStepByUrl
  }))

  useEffect(() => setCurrentStepByUrl(location.pathname), [location.pathname])

  return (
    <>
      <div className={style['steps-wrapper']}>
        <Steps options={options} currentStep={currentStep}></Steps>
      </div>
      <div className='spacer-2x'></div>
      {props.children}
    </>
  )
}

export default React.memo(CreateLayout)
