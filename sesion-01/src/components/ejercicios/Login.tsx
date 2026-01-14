import React, { useState } from 'react'

/*
    Crear un formulario de login con validacion básica, debe de tener dos campos email y password
    Hay que validar que los campos no esten vacios
    Hay que validar con alguna expresion regular que el formato del email sea valido
    Hay que mostrar/ocultar la contraseña con un guion 
    Hay que mostar mensajes de error personalizados
    Que la contraseña tengo un numero minimo de caracteres
*/

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState<LoginData>({ email: "", password: "" });
  const [errores, setErrores] = useState<{ email?: string; password?: string }>({});
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const validar = (): boolean => {
    const nuevosErrores: { email?: string; password?: string } = {};

    if (!login.email) {
      nuevosErrores.email = "El email no puede estar vacío";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        login.email
      )
    ) {
      nuevosErrores.email = "El email no tiene un formato válido";
    }

    if (!login.password) {
      nuevosErrores.password = "La contraseña no puede estar vacía";
    } else if (login.password.length < 8) {
      nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validar()) {
      alert("Login exitoso");
      setLogin({ email: "", password: "" });
      setErrores({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={login.email}
            onChange={handleChange}
            placeholder="Introduce tu email"
            className={`w-full p-2 border rounded ${
              errores.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={mostrarPassword ? "text" : "password"}
              name="password"
              id="password"
              value={login.password}
              onChange={handleChange}
              placeholder="Introduce tu contraseña"
              className={`w-full p-2 border rounded ${
                errores.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <button
              type="button"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {mostrarPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {errores.password && (
            <p className="text-red-500 text-sm mt-1">{errores.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};


export default Login
