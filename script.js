// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submission handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Simple form validation (already required in HTML)
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Sending message...';
    formMessage.style.color = 'white';

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();

        if (result.status === 'success') {
            formMessage.textContent = result.message;
            formMessage.style.color = '#ffdd57';
            contactForm.reset();
        } else {
            formMessage.textContent = 'Failed to send message. Please try again later.';
            formMessage.style.color = 'red';
        }
    } catch (error) {
        formMessage.textContent = 'Error sending message. Please try again later.';
        formMessage.style.color = 'red';
    }
});

// Add subtle animations on cards when focused or hovered (already handled by CSS)
