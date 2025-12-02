import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }

  return (
    <div className='w-full h-screen bg-gray-700 flex justify-center items-center flex-col'>
      <h1 className='px-20 py-5 rounded-2xl text-8xl bg-gray-600 text-center m-10'>{num}</h1>
      <div className='px-10 py-1 rounded-2xl bg-gray-600 '>
      <button className='border-1 border-gray-500 text-gray-300 rounded-3xl px-2 py-1 m-5' onClick={increaseNum}>increase</button>
      <button className='border-1 border-gray-500 text-gray-300 rounded-3xl px-2 py-1 m-5' onClick={decreaseNum}>decrese</button>

      </div>
    </div>
  )
}

export default App