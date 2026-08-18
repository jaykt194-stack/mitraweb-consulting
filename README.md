# MitraWeb Consulting — Advanced GitHub Pages Portfolio

This version uses the supplied MitraWeb logo and WhatsApp number **8860498089**.

## Main feature: Project Lab / Sample Model Generator

Clients can:
1. Select Website, Android App, E-commerce or Web App.
2. Enter their business/project name.
3. Enter their business category.
4. Select features.
5. Choose a visual direction.
6. Describe their requirements.
7. Generate a live sample model immediately.
8. Send the generated project brief to MitraWeb on WhatsApp.
9. Email the brief if they prefer.

## Contact settings

The contact details are near the top of the inline script in `index.html`:

```js
const MITRAWEB = {
  email: "hello@mitraweb.com",
  whatsapp: "918860498089"
};
```

Change the email to your real business email.

## Important: "AI prototype generation"

This GitHub Pages version is a **front-end prototype generator**. It works without a server and is safe to publish as static GitHub Pages.

If you want clients to type something like:

> "I need an online school app where students can login, view courses, pay fees and download certificates"

and have an AI create a much more detailed custom UI, page-by-page wireframe, feature specification, database plan and development estimate, add a small secure backend/API between this website and the AI model.

Do NOT put a private AI API key directly in `index.html` or JavaScript on GitHub Pages.

A recommended next version is:

Client prompt → secure backend → AI → structured project specification → prototype renderer → WhatsApp/quotation.

## GitHub Pages deployment

1. Create a GitHub repository such as `mitraweb-consulting`.
2. Upload:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `mitraweb-logo.png`
   - `README.md`
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

## Recommended future additions

- AI-powered requirement analysis
- AI-generated page list and user flows
- AI-generated UI themes
- Downloadable PDF project proposal
- Automatic quotation estimator
- Client login/dashboard
- Save generated prototypes
- Admin dashboard for leads
- Database for enquiries
- Razorpay/Stripe payment for advance booking
- Calendar scheduling
