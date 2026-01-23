import React, { useEffect, useState } from 'react'

const UseEffectBasico = () => {
    const [isTabActive, setIsTabActive] = useState(true);

    useEffect(() => {
        const active=document.visibilityState === "visible"
      setIsTabActive(active)
      document.title=active?"React 19 + TypeScript":"Desactivado"
    
      return () => {
        
      }
    }, [])
    
  return (
    <div className={`p-8 rounded-3xl transition-all duration-300 border-2 ${isTabActive?"bg-white border-sky-500 shadow-md":"bg-salte-50 border-slate-600 opacity-60"}`}>
      <h2 className='text-2xl font-bold text-slate-800 mb-4'>la pestaña esta {isTabActive?"activa":"desactivada"}</h2>
    </div>
  )
}

export default UseEffectBasico
