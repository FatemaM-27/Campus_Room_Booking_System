import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full text-sm font-bold transition ${
      isActive ? "bg-saffron text-ink" : "text-paper hover:bg-white/10"
    }`;

  return (
    <nav className="bg-ink border-b-4 border-saffron">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="bg-saffron text-ink font-display font-extrabold text-xl w-10 h-10 rounded-lg grid place-items-center rotate-[-6deg]">
            S
          </span>
          <h1 className="font-display text-xl font-extrabold text-paper">StudySpot</h1>
        </div>

        <div className="flex flex-wrap gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/rooms" className={linkClass}>Rooms</NavLink>
          <NavLink to="/book" className={linkClass}>Book</NavLink>
          <NavLink to="/my-bookings" className={linkClass}>My Bookings</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;