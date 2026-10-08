import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookRoom from "./pages/BookRoom";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<BookRoom />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;