import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import UseEffectBasico from './components/01-UseEffectBasico'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-slate-50 font-sans '>
      <Header />  
      <main>
        <UseEffectBasico />
      </main>
      <Footer />
      </div>
    </>
    
  )
}

export default App
