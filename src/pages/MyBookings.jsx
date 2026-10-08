import { Link } from "react-router-dom";
import BookingList from "../components/BookingList";

function MyBookings({ bookings, onCancel, onDelete }) {
  const activeCount = bookings.filter((b) => b.status !== "Cancelled").length;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-4xl font-extrabold">My bookings</h2>
          <p className="mt-2 opacity-70">Everything you've reserved, in one place.</p>
        </div>
        {bookings.length > 0 && (
          <p className="bg-saffron border-2 border-ink rounded-full px-4 py-1 text-sm font-bold">
            {activeCount} active · {bookings.length} total
          </p>
        )}
      </div>

      <div className="mt-8">
        {bookings.length === 0 ? (
          <div className="border-2 border-dashed border-ink rounded-2xl p-10 text-center">
            <p className="font-display text-2xl font-extrabold">No bookings yet</p>
            <p className="mt-1 opacity-70">Find a room and make your first reservation.</p>
            <Link
              to="/rooms"
              className="inline-block mt-5 bg-coral border-2 border-ink rounded-full px-6 py-2 font-bold shadow-[4px_4px_0_0_#12231f]"
            >
              Browse rooms →
            </Link>
          </div>
        ) : (
          <BookingList bookings={bookings} onCancel={onCancel} onDelete={onDelete} />
        )}
      </div>
    </div>
  );
}

export default MyBookings;