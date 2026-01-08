import React from 'react'

/*
    Crear una interfaz llamada producto que tenga id nombre precio disponible y opcionalmente categoria 
    Implementar una funcion llamada calcularTotal que reciba un array de tipo producto y retorne un numero y sume todos los precios de los productos disponibles 
    Crea un array de productos con al menos tres productos diferentes 
    Probar la funcion 
*/

interface Producto{
    id:number,
    nombre:string,
    precio:number,
    disponible:boolean,
    categoria?:string
}

function calcularTotal(productos:Producto[]):number{
    let total = 0;
    productos.forEach(producto => {
        if(producto.disponible){
            total += producto.precio;
        }
    });
    return total;
}

const productos:Producto[] = [
    {id:1, nombre:"Patatas", precio:100, disponible:true},
    {id:2, nombre:"Pollo", precio:200, disponible:false},
    {id:3, nombre:"Tomate", precio:300, disponible:true}
]

const Ejercicio1 = () => {
  return (
    <div>
        <h1>Ejercicio 1</h1>
        {
            productos.forEach(producto=>{
                <div>
                    <p>{producto.id}</p>
                    <p>{producto.nombre}</p>
                    <p>{producto.precio}</p>
                    <p>{producto.disponible}</p>
                    <p>{producto.categoria}</p>
                </div>
            })
        }

        <p>Total: {calcularTotal(productos)}</p>
    </div>
  )
}

export default Ejercicio1
