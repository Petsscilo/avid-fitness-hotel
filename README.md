# Avid Platform

Avid Platform is a modern, responsive web platform for lodging, restaurant booking, and membership services. It provides real-time booking, user authentication, secure payments, and an admin dashboard for managing activities.

---

## ✨ Features

- 🔒 **User Authentication**: Prevents unregistered users from booking or ordering. Redirects them to the sign-up page.
- 🛏️ **Lodging Form**: Allows registered users to book rooms with check-in/out details.
- 🍽️ **Restaurant Booking**: Enables users to reserve tables and dining dates.
- 💳 **Secure Payment Flow**: Simulates real-world payment confirmation with alerts and notifications.
- 📊 **Admin Dashboard**:
  - Real-time analytics (members, payments, bookings)
  - Chart visualization using Chart.js
  - Live notifications of activity
- 📱 **Mobile Responsive Navbar**: Fully rebuilt to work on all screen sizes.
- 🧠 **LocalStorage Integration**: Persists user data and actions across sessions.
- 🚫 **Access Control**: All restricted actions are blocked for unauthenticated users.

---

## 🧰 Technologies Used

- HTML, CSS, JavaScript
- Chart.js (for dashboard charts)
- LocalStorage (for storing user/session data)
- Responsive design with Flexbox and Media Queries

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/avid-platform.git
cd avid-platform
2. Open in Browser
Simply open index.html in your browser to start using the platform.

📁 Folder Structure
pgsql
Copy
Edit
avid-platform/
│
├── index.html
├── signup.html
├── login.html
├── product.html
├── payment.html
├── dashboard.html
├── style.css
├── main.js
└── README.md
🔐 Access Restriction Logic
All forms (booking, ordering, lodging) are protected. If an unregistered or non-logged-in user tries to:

Book a room

Make a reservation

Place an order
They will be redirected to the signup page.

📞 Contact
Built with ❤️ by Peter
For contributions, issues, or suggestions:
📧 peter.dev@example.com
🌍 GitHub

