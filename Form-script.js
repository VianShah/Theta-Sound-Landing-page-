const scriptURL = 'https://script.google.com/macros/s/AKfycbz3IazWdagcL6MMMzdxa-cbjk3Vl8oVIJAo1qyOoVzPHCGC8DrbadzENID3Iwb29Bu2uA/exec';
const form = document.getElementById('waitlist-form');
const responseEl = document.getElementById('form-response');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    excited: formData.get('excited'),
    referral: formData.get('referral'),
  };

  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(data)
  })
  .then(res => {
    responseEl.textContent = "✅ You're on the list! Thanks for signing up.";
    form.reset();
  })
  .catch(err => {
    responseEl.textContent = "❌ Something went wrong. Please try again.";
    console.error('Error!', err.message);
  });
});
