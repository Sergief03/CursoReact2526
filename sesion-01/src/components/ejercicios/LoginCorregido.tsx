import React, { useState } from 'react'
import Boton from './Boton'

interface Credenciales{
    email: string,
    password: string
}
const LoginCorregido = () => {
    const [credenciales, setCredenciales] = useState<Credenciales >({email:"", password:""})
    const [errores, setErrores] = useState<{ email?: string; password?: string }>({})
    const [showPassword, setshowPassword] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(validar()){
            alert("Login exitoso")
            setCredenciales({email:"", password:""})
            setErrores({})
        }

    }

    const validar = (): boolean => {
    const nuevosErrores: { email?: string; password?: string } = {};

    if (!credenciales.email) {
      nuevosErrores.email = "El email no puede estar vacío";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        credenciales.email
      )
    ) {
      nuevosErrores.email = "El email no tiene un formato válido";
    }

    if (!credenciales.password) {
      nuevosErrores.password = "La contraseña no puede estar vacía";
    } else if (credenciales.password.length < 8) {
      nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-amber-100 shadow rounded-lg '>
        <h2 className='text-2xl font-bold mb-6 text-center'>Iniciar sesion</h2>
        <form onSubmit={(e)=>handleSubmit(e)} className='space-y-4 '>
            <div>
                <label className='block text-sm font-medium mb-1'>Email:</label>
                <input type="email" className='w-full px-3 py-2 border rounded focus:outline-none foucus:ring-4'placeholder='tu@email.com' value={credenciales.email} onChange={(e)=>setCredenciales({ ...credenciales, email: e.target.value })}/>
                {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}

            </div>
            <div>
                <label className='block text-sm font-medium mb-1'>Password:</label>
                <input type={ showPassword ? 'text' : 'password' } className='w-full px-3 py-2 border rounded focus:outline-none foucus:ring-4'placeholder='Introduzca su contraseña...' value={credenciales.password} onChange={(e)=>setCredenciales({ ...credenciales, password: e.target.value })}/>
                {errores.password && <p className="text-red-500 text-sm mt-1">{errores.password}</p>}

            </div>
            <Boton tipo='secondary' onClick={()=>setshowPassword(!showPassword)} texto='Mostrar Contraseña'/>
            <div>
                <Boton tipo='primary' texto='Iniciar sesion' submit={true}/>
            </div>
        </form>
    </div>
  )
}

export default LoginCorregido
