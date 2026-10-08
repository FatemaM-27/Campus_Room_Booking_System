import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Rooms() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Study Rooms</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            name={room.name}
            building={room.building}
            capacity={room.capacity}
            available={room.available}
          />
        ))}
      </div>
    </div>
  );
}

export default Rooms;