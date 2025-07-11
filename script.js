/* ================================
   Modal Utility (Reusable & Scalable)
================================== */
const initModal = (modalSelector, openBtnSelector, closeBtnSelector) => {
    const modal = document.querySelector(modalSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = document.querySelector(closeBtnSelector);

    if (!modal) return console.warn(`Modal not found: ${modalSelector}`);

    openBtn?.addEventListener('click', () => modal.style.display = 'flex');
    closeBtn?.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
};

// Usage
initModal('.modal', '.reserve-btn-container button', '.close-btn');

/* ================================
   Form Submission Handler
================================== */
const handleForm = (formId, successMessage, { closeSelector = null, reset = true } = {}) => {
    const form = document.getElementById(formId);
    const closeElement = closeSelector ? document.querySelector(closeSelector) : null;

    if (!form) return console.warn(`Form not found: ${formId}`);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(successMessage);
        closeElement ? closeElement.style.display = 'none' : null;
        if (reset) form.reset();
    });
};

// Usage
handleForm('reserveForm', "🎉 Reservation submitted! We'll call you to confirm.", { closeSelector: '.modal' });
handleForm('lodgeForm', "✅ Lodge booking submitted! We'll contact you soon.");

/* ================================
   Contact Buttons (WhatsApp & Call)
================================== */
const initContactButtons = ({ whatsappSelector, callSelector, whatsappNumber, phoneNumber }) => {
    document.querySelector(whatsappSelector)?.addEventListener('click', () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    });
    document.querySelector(callSelector)?.addEventListener('click', () => {
        window.location.href = `tel:${phoneNumber}`;
    });
};

// Usage
initContactButtons({
    whatsappSelector: '.whatsapp',
    callSelector: '.call',
    whatsappNumber: '234XXXXXXXXXX',
    phoneNumber: '+234XXXXXXXXXX'
});

/* ================================
   Typing Animation
================================== */
const typingAnimation = (elementId, phrases, delay = 4000) => {
    const el = document.getElementById(elementId);
    if (!el) return console.warn(`Typing element not found: ${elementId}`);

    let i = 0;
    const showNext = () => {
        el.textContent = phrases[i];
        i = (i + 1) % phrases.length;
        setTimeout(showNext, delay);
    };
    showNext();
};

// Usage
typingAnimation("typing-text", [
    "➤ WELCOME TO AVID FITNESS/HOTEL",
    "➤ Book a Lodge",
    "➤ Book an Event",
    "➤ Our Restaurant",
    "➤ Gym, Pool & Spa"
]);

/* ================================
   Room Booking Buttons
================================== */
document.querySelectorAll(".room-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("✅ Room booked! Please fill in your details in the form above for confirmation.");
    });
});

/* ================================
   Reserve Modal Open/Close (Optional Global Control)
================================== */
(() => {
    const reserveModal = document.getElementById('reserveModal');
    if (!reserveModal) return;

    window.openReserveModal = () => reserveModal.style.display = 'block';
    window.closeReserveModal = () => reserveModal.style.display = 'none';

    window.addEventListener('click', (e) => {
        if (e.target === reserveModal) reserveModal.style.display = 'none';
    });
})();

/* ================================
   EmailJS Integration w/ Validation
================================== */
const sendEmail = () => {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
        return alert("⚠️ Please fill in all fields before sending.");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return alert("⚠️ Please enter a valid email address.");
    }

    const params = { from_name: name, email_id: email, message };

    emailjs.send("service_e5uhj05", "template_xxxxxx", params)
        .then(() => alert("✅ Message Sent Successfully!"))
        .catch(err => {
            console.error(err);
            alert("❌ Failed to send message. Please try again later.");
        });
};

// Example usage
// document.querySelector('.send-email-btn')?.addEventListener('click', sendEmail);
