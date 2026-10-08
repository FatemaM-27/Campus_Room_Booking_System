import BookingCard from "./BookingCard";

function BookingList({ bookings, onCancel, onDelete }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          id={booking.id}
          studentName={booking.studentName}
          roomName={booking.roomName}
          building={booking.building}
          date={booking.date}
          time={booking.time}
          students={booking.students}
          status={booking.status}
          onCancel={onCancel}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookingList;