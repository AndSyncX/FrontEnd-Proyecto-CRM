import { useEffect, useState } from "react"; // Importar  useEffect y useState de React
import { getClients } from "../api/Clients"; // Importar la función getClients desde el archivo API

function Clients() {
    const [clients, setClients] = useState([]); // Inicializa el estado de los clientes como un array vacío
    const [loading, setLoading] = useState(true); // Inicializa el estado de carga como verdadero
    const [search, setSearch] = useState(""); // Inicializa el estado de búsqueda como una cadena vacía

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

    const filteredClients = clients.filter(client => 
        client.name.toLowerCase().includes(search.toLowerCase()) // Filtra los clientes por nombre
    );

    if (loading) {
        return (
            <div className="p-5">
                <h1 className="text-3xl font-bold text-gray-800">Clients</h1>
                <p className="text-lg">Loading clients...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Clients</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              + New Client
            </button>
          </header>
    
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex justify-between mb-4">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Buscar cliente..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Company</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Phone</th>
                    <th className="py-3 px-6 text-left">Notes</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {filteredClients.map((client) => (
                    <tr key={client.idclient} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-6">{client.name}</td>
                      <td className="py-3 px-6">{client.company}</td>
                      <td className="py-3 px-6">{client.email}</td>
                      <td className="py-3 px-6">{client.phone}</td>
                      <td className="py-3 px-6">{client.notes}</td>
                      <td className="py-3 px-6 text-center">
                        <button className="text-blue-600 hover:underline mr-2">Editar</button>
                        <button className="text-red-600 hover:underline">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                  {filteredClients.length === 0 && (
                    <tr>
                      <td colSpan="4" className="py-4 text-center text-gray-400">No se encontraron clientes.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default Clients;