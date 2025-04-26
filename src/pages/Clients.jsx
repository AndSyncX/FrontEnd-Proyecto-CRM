import { useEffect, useState } from "react"; // Importar  useEffect y useState de React
import { getClients } from "../api/Clients"; // Importar la función getClients desde el archivo API

function Clients() {
    const [clients, setClients] = useState([]); // Inicializa el estado de los clientes como un array vacío
    const [loading, setLoading] = useState(true); // Inicializa el estado de carga como verdadero
    
    useEffect(() => { // useEffect se utiliza para manejar efectos secundarios en componentes funcionales
        async function fetchClients() {
            try {
                const data = await getClients(); // Llama a la función getClients para obtener los datos de los clientes
                setClients(data); // Actualiza el estado de los clientes con los datos obtenidos
            } catch (error) {
                console.error("Error fetching clients:", error); 
            } finally {
                setLoading(false);
            }
        }
        fetchClients(); // Llama a la función fetchClients para obtener los datos al cargar el componente
    }, []) // El array vacío [] asegura que el efecto solo se ejecute una vez al montar el componente

    if (loading) {
        return (
            <div className="p-5">
                <h1 className="text-3xl font-bold mb-4">Lista de Clientes</h1>
                <p className="text-lg">Cargando clientes...</p>
            </div>
        );
    }

    return(
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Lista de Clientes</h1>
            <div className="grid grid-cols-1 gap-4">
                {clients.map((client) => ( // Mapea sobre el array de clientes y renderiza un componente para cada cliente
                <div key={client.id} className="p-4 bg-gray-100 rounded shadow"> {/* Cada cliente se representa con un div que contiene su información */}
                    <h2 className="text-xl font-semibold">{client.name}</h2> {/* Nombre del cliente */}
                    <p>Company: {client.company}</p> {/* Email del cliente */}
                    <p>Email: {client.email}</p> {/* Teléfono del cliente */}
                    <p>Phone: {client.phone}</p>
                    <p>Notes: {client.notes}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Clients;