// ============================== ADMIN DASHBOARD SCRIPTS ==============================

// ========== Initialize Chart ==========
function generateChart() {
    const ctx = document.getElementById('membershipChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sessions',
                data: [5, 7, 8, 6, 9, 10],
                borderColor: '#f1c40f',
                backgroundColor: 'rgba(241, 196, 15, 0.2)',
                fill: true,
                tension: 0.3,
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, grid: { color: '#333' } },
                x: { grid: { color: '#333' } }
            },
            plugins: {
                legend: { labels: { color: '#f1c40f' } }
            }
        }
    });
}

// ========== Admin Notification System ==========
function loadAdminNotifications() {
    const notifications = JSON.parse(localStorage.getItem('adminNotifications')) || [];
    const notificationList = document.querySelector('#notificationList');
    const badge = document.querySelector('#notificationBadge');

    notificationList.innerHTML = '';
    notifications.forEach(notif => {
        const li = document.createElement('li');
        li.textContent = notif;
        notificationList.appendChild(li);
    });

    badge.textContent = notifications.length;
}

function addAdminNotification(message) {
    const notifications = JSON.parse(localStorage.getItem('adminNotifications')) || [];
    notifications.unshift(message);
    localStorage.setItem('adminNotifications', JSON.stringify(notifications));
    loadAdminNotifications();
}

// ========== Booking Form ==========
function setupBookingForm() {
    const bookingForm = document.querySelector('#bookingForm');
    bookingForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = bookingForm.querySelector('input[name="name"]').value;
        const table = bookingForm.querySelector('input[name="table"]').value;

        alert(`Booking Successful for ${name} at table ${table}`);
        addAdminNotification(`New booking by ${name} for table ${table}.`);
        bookingForm.reset();
    });
}

// ========== Reservation Form ==========
function setupReservationForm() {
    const reservationForm = document.querySelector('#reservationForm');
    reservationForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = reservationForm.querySelector('input[name="name"]').value;
        const date = reservationForm.querySelector('input[name="date"]').value;

        alert(`Reservation Successful for ${name} on ${date}`);
        addAdminNotification(`New reservation by ${name} for ${date}.`);
        reservationForm.reset();
    });
}

// ========== Payment Form ==========
function setupPaymentForm() {
    const paymentForm = document.querySelector('#paymentForm');
    paymentForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = paymentForm.querySelector('input[name="name"]').value;
        const amount = paymentForm.querySelector('input[name="amount"]').value;

        alert(`Payment Successful by ${name} for ₦${amount}`);
        addAdminNotification(`New payment by ${name}: ₦${amount}.`);
        paymentForm.reset();
    });
}

// ========== Example Dashboard Data ==========
function fetchDashboardData() {
    document.getElementById('totalMembers').textContent = 157;
    document.getElementById('totalBookings').textContent = 24;
    document.getElementById('totalPayments').textContent = '₦134,000';
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    generateChart();
    loadAdminNotifications();
    fetchDashboardData();
    setupBookingForm();
    setupReservationForm();
    setupPaymentForm();
});

document.addEventListener("DOMContentLoaded", () => {
    const lodgeForm = document.getElementById("lodgeForm");
  
    lodgeForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Collect form data
      const bookingDetails = {
        fullName: document.getElementById("fullName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        email: document.getElementById("email").value.trim(),
        roomType: document.getElementById("roomType").value,
        checkIn: document.getElementById("checkIn").value,
        checkOut: document.getElementById("checkOut").value,
        specialRequests: document.getElementById("specialRequests").value.trim(),
        bookingTime: new Date().toISOString()
      };
  
      // Save to localStorage
      localStorage.setItem("currentBooking", JSON.stringify(bookingDetails));
  
      // Redirect to payment.html
      window.location.href = "payment.html";
    });
  });
  

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.getElementById('joinForm');

    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const membership = document.getElementById('membership').value;

        // Validate membership and assign amount
        let amount = 0;
        switch (membership) {
            case 'monthly':
                amount = 20;
                break;
            case 'quarterly':
                amount = 50;
                break;
            case 'yearly':
                amount = 180;
                break;
            default:
                alert('Please select a valid membership type.');
                return;
        }

        // Store data in localStorage
        const membershipData = {
            name,
            email,
            phone,
            membership,
            amount
        };

        localStorage.setItem('avidMembership', JSON.stringify(membershipData));

        // Redirect to payment.html
        window.location.href = 'payment.html';
    });

    // Show data in UI
document.getElementById('userName').textContent = membershipData.name;
document.getElementById('userPlan').textContent = membershipData.membership;
document.getElementById('userAmount').textContent = membershipData.amount;

});



