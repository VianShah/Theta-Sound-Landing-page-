// Form-script.js
document
  .getElementById("12t_4AhIT7HIAPqRlKL42clgTgOdJDdsfYFpnUFtolKs")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const form  = e.target;
    const name  = encodeURIComponent(form.name.value);
    const email = encodeURIComponent(form.email.value);

    // Build the JSONP URL
    const url   = 
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjL06kPBxrp2M892_OOgqbA3u1uxGw_j-vM3-g6A06BL1GXrFwFuFvq_p2wLLmE9I0M1fLXg0cZGU3/pubhtml"
      + `?name=${name}`
      + `&email=${email}`
      + `&callback=formCallback`;

    // Inject a <script> tag instead of fetch()
    const tag   = document.createElement("script");
    tag.src     = url;
    document.body.appendChild(tag);
  });
