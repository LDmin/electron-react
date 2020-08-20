import { useCreation, usePersistFn } from 'ahooks'
import { useState } from 'react'

export default function stepsModel() {
  const options: IStepsOptions = useCreation(
    () => [
      { text: '新建案件', url: '/app/case/create/new' },
      { text: '上传数据', url: '/app/case/create/upload' },
      { text: '噪点去除', url: '/app/case/create/noise' },
      { text: '人工校验', url: '/app/case/create/check' },
      { text: '生成报告', url: '/app/case/create/report' }
    ],
    []
  )

  const [currentStep, setCurrentStep] = useState(-1)

  const setCurrentStepByUrl = usePersistFn((url: string) =>
    setCurrentStep(options.findIndex(o => o.url === url))
  )

  return {
    options,
    currentStep,
    setCurrentStep,
    setCurrentStepByUrl
  }
}
