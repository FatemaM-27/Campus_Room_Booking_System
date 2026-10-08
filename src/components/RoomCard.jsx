import { Link } from "react-router-dom";

function RoomCard({ id, name, building, floor, capacity, available, features }) {
  return (
    <div className="bg-white border-2 border-ink rounded-2xl p-5 shadow-[6px_6px_0_0_#12231f] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#12231f] flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-extrabold leading-tight">{name}</h3>
        <span
          className={`shrink-0 border-2 border-ink rounded-full px-3 py-0.5 text-xs font-bold ${
            available ? "bg-mint" : "bg-coral"
          }`}
        >
          {available ? "OPEN" : "TAKEN"}
        </span>
      </div>

      <p className="mt-2 text-sm font-medium opacity-70">
        {building} · Floor {floor}
      </p>

      <p className="mt-4 text-3xl font-display font-extrabold">
        {capacity} <span className="text-sm font-body font-medium opacity-60">seats</span>
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span key={feature} className="bg-saffron/40 rounded-md px-2 py-1 text-xs font-bold">
            {feature}
          </span>
        ))}
      </div>

      {available && (
        <Link
          to={`/book?room=${id}`}
          className="mt-5 text-center bg-ink text-paper rounded-full py-2 text-sm font-bold hover:bg-saffron hover:text-ink transition"
        >
          Book this room →
        </Link>
      )}
    </div>
  );
}

export default RoomCard;