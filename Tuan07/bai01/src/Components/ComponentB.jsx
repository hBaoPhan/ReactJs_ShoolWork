import React from 'react'
import { useRecoilState } from 'recoil'
import CounterAtom from "../CounterAtom"

const ComponentB = () => {
    let [count,setCount]= useRecoilState(CounterAtom)

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Descrease</button>
        
    </div>
  )
}

export default ComponentB