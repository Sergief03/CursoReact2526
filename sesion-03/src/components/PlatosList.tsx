import React, { use } from 'react'
import PlatoCard from './PlatoCard'
import type { Plato } from '../types'

interface PlatosListProps {
  platosPromise: Promise<Plato[]>;
  busqueda: string;
}


const PlatosList = ({platosPromise,busqueda}:PlatosListProps) => {
  const platos=use(platosPromise);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
      {
        platos.filter((plato:Plato) => plato.nombre.toLowerCase().includes(busqueda.toLowerCase())).map((plato:Plato) => (
          <PlatoCard key={plato.id} plato={plato} />
        ))
      }
    </div>
  )
}

export default PlatosList
