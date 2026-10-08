function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by room name or building..."
      className="w-full bg-white border-2 border-ink rounded-full px-5 py-3 font-medium shadow-[4px_4px_0_0_#12231f] focus:outline-none focus:bg-saffron/20"
    />
  );
}

export default SearchBar;