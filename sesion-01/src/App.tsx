import React from 'react'
import Header from './components/Header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import Formulario from './components/Formulario'
import Contactos from './components/ejercicios/Contactos'
import Login from './components/ejercicios/Login'
import LoginCorregido from './components/ejercicios/LoginCorregido'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-300 items-center justify-center'>
    
    <Header />
    <main className='container bg-gray-100 mx-auto p-4'>
      <Saludo nombre="pepe" edad={20}/>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ga-6'>
        <Tarjeta title="Tarjeta 1" image='https://avatars.githubusercontent.com/u/182212169?s=48&v=4' description="Descripcion de la tarjeta 1" favorite={true} />
        <Tarjeta title="Tarjeta 2" description="Descripcion de la tarjeta 2" />
        <Tarjeta title="Tarjeta 3" description="Descripcion de la tarjeta 3" />
        <Tarjeta title="Tarjeta 4" description="Descripcion de la tarjeta 4" />
        <Tarjeta title="Tarjeta 5" description="Descripcion de la tarjeta 5" />
        <Tarjeta title="Tarjeta 6" description="Descripcion de la tarjeta 6" />
        <Tarjeta title="Tarjeta 7" description="Descripcion de la tarjeta 7" />
        <Tarjeta title="Tarjeta 8" description="Descripcion de la tarjeta 8" />
      </div>
        <h1 className='text-4xl font-bold text-blue-600'>React 19 + TypeScript</h1>
        <Formulario />

        <Contactos />

        <Login />

        <LoginCorregido />
    </main>
    </div>
  )
}

export default App
