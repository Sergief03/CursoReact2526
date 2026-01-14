import React from 'react'

interface Usuario{
    nombre:string,
    edad:number,
    email:string,
}

interface Producto{
    id:number,
    nombre:string,
    precio:number
}

type Estado= "pendiente" | "aprobado" | "rechazado";

//Modo dios 
//Voy a crea un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz usuario
type CamposUsuario= keyof Usuario;

const Ejercicio2 = () => {
    const [usuario, setusuario] = useState<Usuario | null>(null);
    const [producto, setproducto] = useState<Producto | null>(null);
    const [estado, setEstado] = useState<Estado>("pendiente");
    //Cuando lo vaya a renderizar podre gestionar con el null si hay o  o productos
    if(producto===null){
        return <p>Cargando los datos</p>
    }else{
        <h1>{producto.nombre}</h1>
    }

    let campo:CamposUsuario = "edad";
    campo="email";


  return (
    <div>
        <h1>Ejercicio 2</h1>
      
    </div>
  )
}

export default Ejercicio2
