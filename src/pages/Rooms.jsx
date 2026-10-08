import { useState, useEffect } from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import SearchBar from "../components/SearchBar";

function Rooms() {
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect #1: simulate loading data when the page opens
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // useEffect #2: update the browser tab title when the search changes
  useEffect(() => {
    document.title = search ? `"${search}" · StudySpot` : "Rooms · StudySpot";
  }, [search]);

  const filteredRooms = rooms.filter((room) => {
    const text = search.toLowerCase();
    const matchesSearch =
      room.name.toLowerCase().includes(text) ||
      room.building.toLowerCase().includes(text);
    const matchesAvailability = onlyAvailable ? room.available : true;
    return matchesSearch && matchesAvailability;
  });

  return (
    <div>
      <h2 className="font-display text-4xl font-extrabold">Find your room</h2>
      <p className="mt-2 opacity-70">Type a room name or building to filter instantly.</p>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <button
          onClick={() => setOnlyAvailable(!onlyAvailable)}
          className={`border-2 border-ink rounded-full px-5 py-3 font-bold shadow-[4px_4px_0_0_#12231f] transition ${
            onlyAvailable ? "bg-mint" : "bg-white"
          }`}
        >
          {onlyAvailable ? "✓ Open only" : "Show open only"}
        </button>
      </div>

      {loading ? (
        <p className="mt-10 font-display text-xl animate-pulse">Loading rooms...</p>
      ) : (
        <>
          <p className="mt-8 mb-4 text-sm font-bold uppercase tracking-wider opacity-60">
            {filteredRooms.length} room(s) found
          </p>

          {filteredRooms.length === 0 ? (
            <div className="border-2 border-dashed border-ink rounded-2xl p-10 text-center">
              <p className="font-display text-2xl font-extrabold">No rooms match "{search}"</p>
              <p className="mt-1 opacity-70">Try a different name or building.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  id={room.id}
                  name={room.name}
                  building={room.building}
                  floor={room.floor}
                  capacity={room.capacity}
                  available={room.available}
                  features={room.features}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Rooms;