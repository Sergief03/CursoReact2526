import React from 'react'
import Ejercicio1 from './components/ejercicios/Ejercicio1'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex-row items-center justify-center'>
      <h1 className='text-4xl font-bold text-blue-600'>React 19 + TypeScript</h1>
      <Ejercicio1 />
    </div>
  )
}

export default App
