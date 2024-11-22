// traer la data de los precios de la luz
const data = import.meta.env.VITE_DATA;

export const getData = async () => {
    try {
         const response = await fetch(data);
        if(!response.ok){
            throw new Error("No se cargo la data");
        } 
        return await response.json();
    } catch (error) {
        console.error("Error al hacer la peticion",error);
    }
}