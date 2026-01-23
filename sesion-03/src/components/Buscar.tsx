//buscar nombre plato o ingrediente

type BuscarProps = {
  onBuscar: (texto: string) => void
}

const Buscar = ({ onBuscar }: BuscarProps) => {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar plato..."
          onChange={(e) => onBuscar(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-2
            pl-10
            text-gray-700
            shadow-sm
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500
            focus:outline-none
          "
        />

        {/* Icono lupa */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Buscar

