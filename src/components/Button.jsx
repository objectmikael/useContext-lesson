import React, { useContext } from 'react'
import Context from '../Context'

export default function Button() {

  const {buttonText, buttonTextTwo} = useContext(Context)

  return (
    <div>
      <button>{ buttonTextTwo }</button>
    </div>
  )
}
