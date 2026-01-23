import React from 'react'

const Header = () => {
  return (
    <header className='mb-12 text-center'>
      <h1 className='text-4xl font-extrabold text-slate-900 '>Platos  
        <span className='text-orange-600 '> PREMIUM</span>
      </h1>
      <p>
        Explora nuestra carta de platos internacionales
        <code className='text-orange-400 px-2 rounded'>React 19</code>
      </p>
    </header>
  )
}

export default Header
