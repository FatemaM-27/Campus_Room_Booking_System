import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookRoom from "./pages/BookRoom";
import MyBookings from "./pages/MyBookings";

function App() {
  // Lazy initial state: read saved bookings from the browser once, on first load
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem("StudySpot-bookings");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // useEffect: save bookings every time they change
  useEffect(() => {
    localStorage.setItem("StudySpot-bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "Cancelled" } : b))
    );
  };

  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-5xl w-full mx-auto p-6 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<BookRoom onAddBooking={addBooking} />} />
          <Route
            path="/my-bookings"
            element={
              <MyBookings
                bookings={bookings}
                onCancel={cancelBooking}
                onDelete={deleteBooking}
              />
            }
          />
        </Routes>
      </main>

      <footer className="bg-ink text-paper text-center text-sm py-4 border-t-4 border-saffron">
        StudySpot · Campus Study Room Booking 
      </footer>
    </div>
  );
}

export default App;