const statusStyles = {
  Pending: "bg-saffron",
  Cancelled: "bg-coral",
  Confirmed: "bg-mint",
};

function formatDate(dateString) {
  // "2026-10-15" becomes "15 Oct 2026"
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BookingCard({
  id,
  studentName,
  roomName,
  building,
  date,
  time,
  students,
  status,
  onCancel,
  onDelete,
}) {
  const isCancelled = status === "Cancelled";

  return (
    <div
      className={`border-2 border-ink rounded-2xl p-5 shadow-[6px_6px_0_0_#12231f] ${
        isCancelled ? "bg-white/50 opacity-70" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className={`font-display text-xl font-extrabold ${isCancelled ? "line-through" : ""}`}>
            {roomName}
          </h3>
          <p className="text-sm font-medium opacity-70">{building}</p>
        </div>
        <span
          className={`shrink-0 border-2 border-ink rounded-full px-3 py-0.5 text-xs font-bold uppercase ${
            statusStyles[status] || "bg-white"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-paper rounded-lg py-2">
          <p className="text-xs font-bold uppercase opacity-60">Date</p>
          <p className="text-sm font-bold">{formatDate(date)}</p>
        </div>
        <div className="bg-paper rounded-lg py-2">
          <p className="text-xs font-bold uppercase opacity-60">Time</p>
          <p className="text-sm font-bold">{time}</p>
        </div>
        <div className="bg-paper rounded-lg py-2">
          <p className="text-xs font-bold uppercase opacity-60">Group</p>
          <p className="text-sm font-bold">{students}</p>
        </div>
      </div>

      <p className="mt-3 text-sm opacity-70">Booked by {studentName}</p>

      <div className="mt-4 flex gap-2">
        {!isCancelled && (
          <button
            onClick={() => onCancel(id)}
            className="border-2 border-ink rounded-full px-4 py-1.5 text-sm font-bold hover:bg-coral transition"
          >
            Cancel booking
          </button>
        )}
        <button
          onClick={() => onDelete(id)}
          className="border-2 border-ink rounded-full px-4 py-1.5 text-sm font-bold hover:bg-ink hover:text-paper transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default BookingCard;