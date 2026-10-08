function RoomCard({ name, building, capacity, available }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-1">🏢 {building}</p>
      <p className="text-gray-600">👥 Capacity: {capacity}</p>
      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full ${
          available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {available ? "Available" : "Booked"}
      </span>
    </div>
  );
}

export default RoomCard;