# Connecting Your RSVP Form to Google Sheets + Gmail

Your website already works out of the box: every RSVP opens a pre-filled email
addressed to whichever Gmail you set as `fallbackEmail` in the code. That
needs zero setup.

If you'd rather have RSVPs land automatically in a **Google Sheet** (and still
get an email notification), follow the steps below. It takes about 10
minutes and is completely free.

---

## Step 1 — Create your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank sheet.
2. Name it something like `Wedding RSVPs`.
3. In row 1, add these column headers exactly:

   ```
   Timestamp | Name | Email | Attending | Guests | Dietary | Message
   ```

## Step 2 — Open the script editor

1. In your Sheet, click **Extensions → Apps Script**.
2. Delete any placeholder code in the editor.
3. Paste in the script below.
4. Replace `YOUR-EMAIL@gmail.com` on line 2 with the Gmail address that should
   receive a notification for every RSVP.

```javascript
// ---- EDIT THIS ----
const NOTIFY_EMAIL = "YOUR-EMAIL@gmail.com";
const COUPLE_NAMES = "Isabela & Rafael";
// -------------------

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.attending || "",
    data.guests || "",
    data.dietary || "",
    data.message || ""
  ]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `New RSVP from ${data.name} — ${COUPLE_NAMES}`,
    body:
`You have a new RSVP!

Name: ${data.name}
Email: ${data.email}
Attending: ${data.attending}
Guests: ${data.guests}
Dietary Restrictions: ${data.dietary}
Message: ${data.message}
`
  });

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3 — Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google will ask you to authorize the script — click through the
   permission prompts (you'll see a warning that the app isn't verified;
   this is expected for a personal script — click **Advanced → Go to
   [project name] (unsafe)** to proceed).
6. Copy the **Web app URL** it gives you. It looks like:

   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Step 4 — Add the URL to your website

Open `config.js`, find this line near the top of the `CONFIG` object:

```javascript
googleScriptURL: ""
```

Paste your URL in between the quotes:

```javascript
googleScriptURL: "https://script.google.com/macros/s/AKfycb.../exec"
```

Save `config.js`. Every RSVP submission will now:
- Append a new row to your Google Sheet automatically
- Send you an email notification at `NOTIFY_EMAIL`
- Still offer the guest a direct "email us" link as backup

---

### Notes

- If you ever change the sheet's column order, update the `sheet.appendRow(...)`
  order in the script to match.
- Re-deploy (**Deploy → Manage deployments → Edit → New version**) any time
  you change the script.
- This uses your personal Google account's free quota (100 emails/day via
  `MailApp`), which is more than enough for a wedding guest list.
- Hosting: once you're happy with the site, you can host it for free on
  GitHub Pages, Netlify, or Vercel — just upload all four files
  (`index.html`, `styles.css`, `config.js`, `app.js`) together in the same
  folder, keeping their filenames as-is.
