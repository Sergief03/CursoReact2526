import React from "react";

const Header = () => {
  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-4">
          Rutas con React Router
          <span className="text-orange-700"> DOM</span>
        </h1>
        <p className="text-gray-600">
          Ejercicio de rutas básicas. Usando:{" "}
          <code className="text-orange-300 px-2 rounded">React 19</code>
        </p>
      </header>
    </div>
  );
};

export default Header;
