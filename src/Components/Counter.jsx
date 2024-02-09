import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountDecrement,setCountIncrement, setCountIncrementBY5 } from '../Redux/Slices/States/counterSlice'

const Counter = () => {
  const count= useSelector((state)=>{
    return state.counter.count
  })

  
  const dispatch = useDispatch();

  const handleIncrement =()=>{
    dispatch(setCountIncrement())
  }
  const handleDecrement =()=>{
    dispatch(setCountDecrement())
  }
  const handleIncrementBy5 =()=>{
    dispatch(setCountIncrementBY5(5))
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleIncrementBy5}>+5</button>
    </div>
  )
  }

export default Counter