/*
    Crear un componente llamado boton que le pase como props un texto el tipo de boton y el evento onclick.
    El tipo d eboton lo llamare tipoBoton sera de tipo type y sera de tres tipos primary, secondary o danger
    Si es primary tendra un backgroud azul-500 y cunado te pongas encima tendra un bg-azul-700
    Si es secondary tendra un bg-gray-500 y cuando me ponga encima un bg-gray-700 
    Si es danger tendra un bg-red-500 y cuando me ponga encima un bg-red-700
    Todos tendran texto blanco de letra 
*/

import React from "react";

type TypeBoton = "primary" | "secondary" | "danger";

interface BotonProps {
  tipo: TypeBoton;
  onClick?: () => void;
  texto: string;
  submit?: boolean;
}

const Boton: React.FC<BotonProps> = ({ tipo, onClick, texto, submit = false }) => {
  const bgClass =
    tipo === "primary"
      ? "bg-blue-500 hover:bg-blue-700"
      : tipo === "secondary"
      ? "bg-gray-500 hover:bg-gray-700"
      : "bg-red-500 hover:bg-red-700";

  return (
    <button
      type={submit ? "submit" : "button"}
      className={`py-2 px-4 rounded text-white font-semibold shadow transition ${bgClass}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Boton;

