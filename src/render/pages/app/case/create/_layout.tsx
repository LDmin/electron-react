import React from 'react'

const CreateLayout: React.FC = props => {
  return (
    <>
      <div>1234</div>
      {props.children}
    </>
  )
}

export default React.memo(CreateLayout)
