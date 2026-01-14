import React, { useState } from 'react'
//--------- USO DE RENDERIZADO CONDICIONAL EN COMPONENTES Y PROPIEDADES ------------
interface TarjetaProps{
    title:string,
    description:string,
    image?:string,
    favorite?:boolean
}


const Tarjeta = ({title,description,image,favorite=false}:TarjetaProps) => {
  const [fav, setfav] = useState(favorite)
  return (
    <div
  className={`rounded-lg shadow-md p-6 m-2 cursor-pointer ${
    fav
      ? 'bg-yellow-100 border-2 border-amber-600'
      : 'bg-white'
  }`}
  onClick={() => setfav(!fav)}
>
  <h2 className="text-xl font-bold mb-2">{title}</h2>

  <p className="text-gray-500">{description}</p>

  {fav && <span className="text-xl">⭐</span>}

  {image && (
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
  )}
</div>

  )
}

export default Tarjeta
