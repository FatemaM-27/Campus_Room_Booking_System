import { Link } from "react-router-dom";

const features = [
  { num: "01", title: "Find", text: "Browse every study room with capacity and facilities." },
  { num: "02", title: "Search", text: "Filter by room name or building in real time." },
  { num: "03", title: "Book", text: "Send a booking request in under a minute." },
];

function Home() {
  return (
    <div className="py-8">
      <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-[1.05] max-w-3xl">
        Your group deserves a{" "}
        <span className="bg-saffron px-2 -rotate-1 inline-block">better</span>{" "}
        place to study.
      </h2>
      <p className="mt-6 text-lg max-w-xl opacity-80">
        Discover free rooms across campus, reserve one for your team, and keep
        track of every booking in one place.
      </p>
      <Link
        to="/rooms"
        className="inline-block mt-8 bg-coral border-2 border-ink rounded-full px-7 py-3 font-bold shadow-[4px_4px_0_0_#12231f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
      >
        Explore rooms →
      </Link>

      <div className="grid gap-5 sm:grid-cols-3 mt-14">
        {features.map((f) => (
          <div key={f.num} className="border-2 border-ink rounded-2xl p-5 bg-white/60">
            <span className="font-display text-4xl font-extrabold text-coral">{f.num}</span>
            <h3 className="font-display text-xl font-extrabold mt-2">{f.title}</h3>
            <p className="text-sm mt-1 opacity-75">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;