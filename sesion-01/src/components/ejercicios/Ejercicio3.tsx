import React from 'react'
//Uso de formularios con typescript
interface Usuario{
    nombre:string,
    edad:number,
    email:string,
}



const Ejercicio3 = () => {
    const [usuario, setusuario] = useState<Usuario>({nombre:"", edad:0, email:""});

    function actualizaCampo(campo:keyof Usuario,valor: string | number){
        setusuario({...usuario, [campo]:valor})
    }
  return (//Uso de formularios con typescript
    <div>
        <h1>Ejercicio 3</h1>
        <p>Introduce tu nombre: </p>
        <input value={usuario.nombre} onChange={(e)=>actualizaCampo("nombre",e.target.value)}></input>
      
    </div>
  )
}

export default Ejercicio3
