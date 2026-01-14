/*
    crear un componente que cree una lista de contactos el usuario puede eliminar y agregar contactos
    Requisitos:
        - Crear una interfaz llamada contacto con el id telefono e email
        - Debe de tener un formulario con tres inputs nombre, telefono y email, un boton para agregar el contacto un boton para agregar el contacto y un boton para eliminar el contacto y una lista con los contactos 
        - Las funcionalidades deben de ser:
            - Agregar un nuevo contacto(generar un id con alguna libreria npm)
            - eliminar un contacto por su id 
            - Limpiar el formulario despues de agregar
            - Mostrar un mensaje si no hay contactos almacenados 
*/
import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

interface Contacto {
  id: string
  nombre: string
  telefono: string
  email: string
}

const Contactos = () => {
  const [contactos, setContactos] = useState<Contacto[]>([])
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const agregarContacto = (e: React.FormEvent) => {
    e.preventDefault()

    const nuevoContacto: Contacto = {
      id: uuidv4(),
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email
    }

    setContactos([...contactos, nuevoContacto])

    // Limpiar formulario
    setForm({ nombre: "", telefono: "", email: "" })
  }

  const eliminarContacto = (id: string) => {
    setContactos(contactos.filter(c => c.id !== id))
  }

  return (
    <div>
      <form onSubmit={agregarContacto}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar</button>
      </form>

      {contactos.length === 0 ? (
        <p>No hay contactos almacenados</p>
      ) : (
        <ul>
          {contactos.map(contacto => (
            <li key={contacto.id}>
              <p>{contacto.nombre}</p>
              <p>{contacto.telefono}</p>
              <p>{contacto.email}</p>
              <button onClick={() => eliminarContacto(contacto.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Contactos

