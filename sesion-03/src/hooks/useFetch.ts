import { useEffect, useState } from "react"


export function useFetch<T>(url:string){
    //Aqui guardaremos la data final
    const [data,setData]= useState<T | null>(null)
    
    //Mostrar o no un loop que diga cargando
    const [loading,setLoading]= useState<boolean>(true)

    //Por si tenemos algun error y fallamos
    const [error,setError]= useState<Error | null>(null)

    //efecto de que cuando cargue el componente(o que renderice por primera vez haremos useEffect)
    useEffect(() => {
      setLoading(true)
      setError(null)
      setData(null)
      
      //creamos un mando a distancia para aboratr el fetch
      const controlador=new AbortController();
      //Es una señal que va por el cable del fetch y que me servira para cortarlo cuando quiera 
      const { signal }=controlador; 
      const fetchData=async ()=>{
          try {
            //hacemos la llamda y pasamos la señal de cancelacion 
            const response= await fetch(url,{signal})
            if(!response.ok){
                setError(error as Error)
                throw new Error("Error al obtener los datos",);

            }
            setData(await response.json())
          } catch (error:unknown) {
            setError(error as Error)
            throw new Error("Error",error as Error);
          }finally{
            setLoading(false)
          }
      }

      fetchData();

      //se ejecuta cuando se va a desmontar el componente
      return () => {
        controlador.abort();
      }
    }, [url])
    return {
        data,
        loading,
        error
    }
}