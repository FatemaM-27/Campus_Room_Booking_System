import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold underline"
      : "text-indigo-100 hover:text-white";

  return (
    <nav className="bg-indigo-600 px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-xl font-bold text-white">📚 Study Room Booking</h1>
        <div className="flex gap-5">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/rooms" className={linkClass}>Rooms</NavLink>
          <NavLink to="/book" className={linkClass}>Book Room</NavLink>
          <NavLink to="/my-bookings" className={linkClass}>My Bookings</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;