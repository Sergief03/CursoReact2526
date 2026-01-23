import React, { Suspense, useState } from 'react'
import PlatosList from './components/PlatosList'
import { fetchDatos } from './utils/api'
import Header from './components/Header'
import LoadingFallBack from './components/LoadingFallBack'
import Buscar from './components/Buscar'

const App = () => {
  const [platosPromise] = useState(()=>fetchDatos())
  const [busqueda, setBusqueda] = useState("")


  return (
    <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <Header/>
        <main>
          <Buscar onBuscar={setBusqueda}/>
          <Suspense fallback={<LoadingFallBack message="Cargando..."/>}>
            <PlatosList platosPromise={platosPromise} busqueda={busqueda} />
          </Suspense>
        </main>
      </div>
      
    </div>
  )
}

export default App
