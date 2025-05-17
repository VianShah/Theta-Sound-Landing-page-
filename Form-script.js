document.addEventListener('DOMContentLoaded', function () {
 const form = document.getElementById('waitlist-form'); // Changed ID
  const responseEl = document.getElementById('waitlist-form'); // Changed ID

  if (!form) {
    console.error("❌ Form element with ID 'waitlist-form' not found.");
    return;
  }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      email: formData.get('email'),
      excited: formData.get('excited'),
      referral: formData.get('referral'),
    };

    fetch('https://script.google.com/macros/s/AKfycbwde_BzXUhqZCDl7FG-anRle9bQhWzMS5l1IdIR4uTrQyBnTz2yKzb63WWPPMGvVnBBdg/exec', {
      method: 'POST',
      body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(result => {
      responseEl.textContent = "✅ You're on the list! Thanks for signing up.";
      form.reset();
    })
    .catch(error => {
      console.error('❌ Submission error:', error);
      responseEl.textContent = "❌ Something went wrong. Please try again.";
    });
  });
});
