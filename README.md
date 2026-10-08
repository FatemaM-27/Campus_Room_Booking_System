# Campus Study Room Booking System

## Project Description
StudySpot is a React frontend where students can browse study rooms, search for one, submit a booking request, and track their bookings.

## Problem Statement
A college has multiple study rooms for group discussions and project work. Students need a simple application to view available rooms, search for a suitable room, submit a booking request, and view their bookings.

## Features
- View study rooms as cards (name, building, floor, capacity, facilities, availability)
- Search rooms by name or building, plus an "open only" filter
- Booking form with validation (including room capacity check)
- Booking confirmation without page refresh
- My Bookings page with status badges, cancel and remove
- Bookings saved in the browser (localStorage)
- Responsive layout with React Router navigation

## Technologies Used
React, Vite, React Router, Tailwind CSS

## Application Screens
- **Home:** introduction and feature overview
- **Rooms:** searchable list of room cards
- **Book Room:** controlled booking form with confirmation
- **My Bookings:** list of submitted bookings

## How to Run the Project
1. Clone the repository
2. `npm install`
3. `npm run dev`
4. Open the localhost link shown in the terminal

## Key React Concepts Demonstrated
Functional components, JSX, props, reusable components, useState, controlled inputs, onChange/onSubmit/preventDefault, list rendering with map() and unique keys, useEffect (loading simulation, document title, localStorage sync), lifting state up, React Router (including query parameters), Tailwind CSS.

## Note
This project was developed as part of MERN Stack Placement Training.
