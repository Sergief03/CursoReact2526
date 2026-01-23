
//API hara un fecthing a mi api para traer todos los platos

import { API_CONFIG, type Plato } from "../types"

export const fetchDatos = async (): Promise<Plato[]> => {
  const url = `${API_CONFIG.BASEURL}${API_CONFIG.ENPOINTS.PLATOS}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Error al obtener los platos")
  }

  return response.json()
}
