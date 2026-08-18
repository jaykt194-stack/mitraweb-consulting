# MitraWeb Consulting Portfolio

A modern, responsive static portfolio for **MitraWeb Consulting**.

## Files

- `index.html` — page structure/content
- `styles.css` — responsive UI and animations
- `script.js` — menu, scroll animation, contact form and company contact settings

## Before publishing

Open `script.js` and change:

```js
const MITRAWEB = {
  email: "your-real-email@example.com",
  whatsapp: "91XXXXXXXXXX"
};
```

Replace the demo project names/content in `index.html` with your real projects.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js` and this README.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.
7. GitHub will publish the site at your Pages URL.

For a custom domain, configure it under **Settings → Pages → Custom domain** and then configure the required DNS record with your domain provider.

## Important

GitHub Pages is static hosting, so this demo contact form opens the visitor's email application. If you later want submissions stored in a database or sent without opening an email app, connect a form/backend service.
