import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import rooms from "../data/rooms";

const emptyForm = { studentName: "", roomId: "", date: "", time: "", students: "" };

const inputClass =
  "w-full bg-white border-2 border-ink rounded-xl px-4 py-3 font-medium focus:outline-none focus:bg-saffron/20";

// Small reusable wrapper: label + input + error message
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-bold uppercase tracking-wider mb-1">{label}</label>
      {children}
      {error && <p className="text-coral font-bold text-sm mt-1">⚠ {error}</p>}
    </div>
  );
}

function BookRoom({ onAddBooking }) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ ...emptyForm, roomId: searchParams.get("room") || "" });
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const openRooms = rooms.filter((room) => room.available);
  const today = new Date().toLocaleDateString("en-CA"); // gives YYYY-MM-DD

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const selectedRoom = rooms.find((room) => room.id === Number(form.roomId));

    if (form.studentName.trim() === "") newErrors.studentName = "Please enter your name.";
    if (!selectedRoom) newErrors.roomId = "Please choose a room.";
    if (form.date === "") newErrors.date = "Please pick a date.";
    else if (form.date < today) newErrors.date = "Date cannot be in the past.";
    if (form.time === "") newErrors.time = "Please pick a time.";

    const count = Number(form.students);
    if (!form.students || count < 1) {
      newErrors.students = "Enter at least 1 student.";
    } else if (selectedRoom && count > selectedRoom.capacity) {
      newErrors.students = `${selectedRoom.name} fits only ${selectedRoom.capacity} students.`;
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return; // stop if anything is invalid

    const room = rooms.find((r) => r.id === Number(form.roomId));
    const booking = {
      id: Date.now(),
      studentName: form.studentName.trim(),
      roomName: room.name,
      building: room.building,
      date: form.date,
      time: form.time,
      students: Number(form.students),
      status: "Pending",
    };

    onAddBooking(booking); // send it up to App
    setConfirmation(booking); // show the confirmation card
    setForm(emptyForm); // clear the form
  };

  // After a successful submit, show the confirmation instead of the form
  if (confirmation) {
    return (
      <div className="max-w-xl mx-auto bg-mint border-2 border-ink rounded-2xl p-8 shadow-[8px_8px_0_0_#12231f]">
        <p className="text-5xl">🎉</p>
        <h2 className="font-display text-3xl font-extrabold mt-3">Request sent!</h2>
        <p className="mt-3 font-medium">
          Thanks {confirmation.studentName}. We've received your request for{" "}
          <strong>{confirmation.roomName}</strong> ({confirmation.building}) on{" "}
          <strong>{confirmation.date}</strong> at <strong>{confirmation.time}</strong> for{" "}
          <strong>{confirmation.students}</strong> student(s).
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setConfirmation(null)}
            className="bg-white border-2 border-ink rounded-full px-5 py-2 font-bold"
          >
            Book another
          </button>
          <Link
            to="/my-bookings"
            className="bg-ink text-paper border-2 border-ink rounded-full px-5 py-2 font-bold"
          >
            View my bookings →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="font-display text-4xl font-extrabold">Book a room</h2>
      <p className="mt-2 opacity-70">Fill in the details and we'll reserve it for your group.</p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 bg-white/70 border-2 border-ink rounded-2xl p-6 space-y-5 shadow-[6px_6px_0_0_#12231f]"
      >
        <Field label="Student name" error={errors.studentName}>
          <input
            type="text"
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
            placeholder="e.g. Fatema"
            className={inputClass}
          />
        </Field>

        <Field label="Room" error={errors.roomId}>
          <select name="roomId" value={form.roomId} onChange={handleChange} className={inputClass}>
            <option value="">Choose an open room...</option>
            {openRooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} · {room.building} (up to {room.capacity})
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Date" error={errors.date}>
            <input
              type="date"
              name="date"
              min={today}
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>
          <Field label="Time" error={errors.time}>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Number of students" error={errors.students}>
          <input
            type="number"
            name="students"
            min="1"
            value={form.students}
            onChange={handleChange}
            placeholder="e.g. 4"
            className={inputClass}
          />
        </Field>

        <button
          type="submit"
          className="w-full bg-coral border-2 border-ink rounded-full py-3 font-bold shadow-[4px_4px_0_0_#12231f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          Send booking request
        </button>
      </form>
    </div>
  );
}

export default BookRoom;