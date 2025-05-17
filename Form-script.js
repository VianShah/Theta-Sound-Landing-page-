// Form-script.js
document
  .getElementById("Theta Sound Waitlist")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const form  = e.target;
    const name  = encodeURIComponent(form.name.value);
    const email = encodeURIComponent(form.email.value);

    // Build the JSONP URL
    const url   = 
      "https://script.google.com/macros/s/AKfycbwde_BzXUhqZCDl7FG-anRle9bQhWzMS5l1IdIR4uTrQyBnTz2yKzb63WWPPMGvVnBBdg/exec"
      + `?name=${name}`
      + `&email=${email}`
      + `&callback=formCallback`;

    // Inject a <script> tag instead of fetch()
    const tag   = document.createElement("script");
    tag.src     = url;
    document.body.appendChild(tag);
  });
