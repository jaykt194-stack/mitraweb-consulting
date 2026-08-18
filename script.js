/*
  MITRAWEB SETTINGS
  Replace the values below before publishing.
*/
const MITRAWEB = {
  email: "support@mitrawebconsulting.net",
  whatsapp: "919999999999"
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("emailLink");
const whatsappLink = document.getElementById("whatsappLink");
emailLink.textContent = MITRAWEB.email;
emailLink.href = `mailto:${MITRAWEB.email}`;
whatsappLink.href = `https://wa.me/${MITRAWEB.whatsapp}`;

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = `${pct}%`;
}, {passive:true});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`New MitraWeb project enquiry — ${data.get("service")}`);
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Contact: ${data.get("contact")}
Service: ${data.get("service")}

Project details:
${data.get("message")}`
  );
  window.location.href = `mailto:${MITRAWEB.email}?subject=${subject}&body=${body}`;
});
