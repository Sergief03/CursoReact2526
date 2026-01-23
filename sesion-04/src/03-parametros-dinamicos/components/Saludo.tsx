import React from "react";
import { Link, useParams } from "react-router-dom";

const Saludo = () => {
  const { nombre } = useParams<{ nombre: string }>();
  return (
    <div className="p-20 text-center  duration-500">
      <title>Saludos a {nombre}</title>
      <meta
        name="Description"
        content={`Página personalizada para ${nombre}`}
      />
      <div className="text-6xl mb-6">
        <h1 className="text-6xl text-slate-900">
          Bienvenido, <span className="text-blue-600">{nombre}</span>
        </h1>
        <p className="mt-4 italic">Dato recuperado con el hook useParam</p>
        <Link
          to="/"
          className="mt-20 inline-block px-8 py-5 bg-slate-800 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default Saludo;
