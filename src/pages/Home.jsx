import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Welcome to Campus Study Room Booking
      </h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Find a study room for your group, book it in a few clicks, and keep
        track of all your reservations.
      </p>
      <Link
        to="/rooms"
        className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
      >
        Browse Rooms
      </Link>

      <div className="grid gap-4 sm:grid-cols-3 mt-12">
        <div className="bg-white p-5 rounded-xl shadow">🔍 Search rooms quickly</div>
        <div className="bg-white p-5 rounded-xl shadow">📝 Submit booking requests</div>
        <div className="bg-white p-5 rounded-xl shadow">📋 View your bookings</div>
      </div>
    </div>
  );
}

export default Home;