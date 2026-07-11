// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Booking form submission
const form = document.querySelector('.booking-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = form.querySelector('input[placeholder="John"]').value.trim();
    const lastName = form.querySelector('input[placeholder="Doe"]').value.trim();
    const from = form.querySelector('input[placeholder="e.g. New York (JFK)"]').value.trim();
    const to = form.querySelector('input[placeholder="e.g. London (LHR)"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (!firstName || !lastName || !from || !to || !email) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`✅ Booking request received for ${firstName} ${lastName}!\n\nRoute: ${from} → ${to}\nWe'll send confirmation to: ${email}\n\nThank you!`);
    form.reset();
  });
}

// Newsletter
const newsletter = document.querySelector('.newsletter');
if (newsletter) {
  newsletter.querySelector('button').addEventListener('click', () => {
    const email = newsletter.querySelector('input').value.trim();
    if (!email) { alert('Please enter your email.'); return; }
    alert(`Thanks for subscribing with ${email}!`);
    newsletter.querySelector('input').value = '';
  });
}
