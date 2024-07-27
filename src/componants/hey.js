import React from 'react'
import { useSelector } from 'react-redux'

function Hey() {
    const counterValue = useSelector((state)=> state.counter.value)
  return (
    <div>
      <h2>Counter in another componant {counterValue}</h2>
    </div>
  )
}

export default Hey;
