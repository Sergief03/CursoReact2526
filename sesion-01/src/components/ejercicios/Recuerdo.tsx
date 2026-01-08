import { randomUUID } from "crypto";

const nombre:string ="pepe";
const edad:number = 20;
const isAdmin: boolean = true;
let nulo: null = null;
const lenguajes: string[] = ["php", "js", "ts"];
const numeros: number[] = [1, 2, 3, 4, 5];
const usuarios:object[] = [{name: "pepe", age: 20}, {name: "pepe", age: 20}, {name: "pepe", age: 20}];
//Objeto simple tipado
const persona:{nombre:string, edad:number, isAdmin:boolean} = {nombre:"pepe", edad:20, isAdmin:true};
//Sia accedo a persona.apellidos me va a dar error

// ************ INTERFACES   **************
// Las interfaces son un contrato que va a definir la forma que tiene un objeto
interface Usuario {
    id:number,
    name:string,
    email:string,
    edad?:number, //Opcional
    activo:boolean
}

const usuario1:Usuario = {
    id:1,
    name:"pepe",
    email:"pepe@pepe",
    edad:20,
    activo:true
}

const usuario2:Usuario = {
    id:1,
    name:"pepe",
    email:"pepe@pepe",
    activo:true,
    //edad era opcional...
}

function sumar(a:number, b:number):number {
    return a + b;
}

function saludar(nombre:string):void {
    console.log("Bienvenido", nombre);
}

//funciones con parametros opcionales

function crearUsuario(name:string, edad?:number):Usuario {
    return {
        id:randomUUID(),
        name,
        email:`${name.toLowerCase()}@gmail.com`,
        edad,
        activo:true
    }
}

//Union Types(posibles valores que puede tomar una variable)
const id: string | number = 123;

type Tamaño= "small" | "medium" | "large";

const talla: Tamaño = "small";

//Cuando usar Type y cuando usar interface
//Usar Type con primitivos y uniones
//Usar interface con objetos

interface Persona {
    nombre:string,
    edad:number
}

interface Empleado extends Persona {
    puesto:string,
    salario:number
}

const empleado1:Empleado = {
    nombre:"pepe",
    edad:20,
    puesto:"desarrollador",
    salario:2000
}

export default function Recuerdo() {
    return (
        <div>
            <h1>Recuerdo</h1>
            <p>Me llamo {nombre} y tengo {edad} años</p>
        </div>
    );
}
