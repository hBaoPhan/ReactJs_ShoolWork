import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import CounterAtom from "../CounterAtom"

const ComponentA = () => {
    let count=useRecoilValue(CounterAtom)
  return (
    <div>ComponentA: {count}</div>
  )
}

export default ComponentA