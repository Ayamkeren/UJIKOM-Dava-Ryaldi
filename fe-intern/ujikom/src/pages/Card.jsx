import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axios.get("http://localhost:3001/toys");
        setToys(response.data);
      } catch (error) {
        console.error("Error fetching toys:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchToys();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/toys/${id}`);
      setToys(toys.filter((toy) => toy.id !== id));
    } catch (error) {
      console.error("Error deleting toy:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <div key={toy.id} className="p-4 shadow-lg border rounded-lg">
            <div>
              <img src={toy.gambar} alt={toy.name} className="w-full h-40 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{toy.name}</h2>
              <p className="text-sm text-gray-600">{toy.deskripsi}</p>
              <p className="text-md font-bold mt-2">Rp {toy.harga}</p>
              <p className="text-sm">Stock: {toy.stock}</p>
              <p className="text-sm text-gray-500">Seller: {toy.gambar}</p>
              <button className="mt-3 w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={() => handleDelete(toy.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
