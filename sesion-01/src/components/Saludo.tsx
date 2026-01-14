import React from 'react'

interface SaludoProps {
    nombre:string,
    edad:number,
}

const Saludo = ({nombre, edad}:SaludoProps) => {
  return (
    <div className='p-4 m-4 bg-yellow-300 rounded-lg shadow'>
      <h2 className='text-2xl font-semibold'>Bienvenido@ {nombre}</h2>
      <p className='text-gray-600 font-medium'>Tienes {edad} años</p>
    </div>
  )
}

export default Saludo
