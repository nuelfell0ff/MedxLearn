Place a preview image at the site root to enable social link previews (WhatsApp, Facebook, Twitter).

Recommended filename: `medxlearn-preview.png`
Recommended size: 1200 × 630 px (aspect ratio 1.91:1)
File format: PNG or JPG
Max size: keep under 5 MB for fast fetching

Steps:
1. Add your image to the `public/` folder so it's served from `https://your-domain.example/medxlearn-preview.png`.
2. Deploy the site so the image is publicly accessible.
3. (Optional) Use the Facebook Sharing Debugger to refresh scraper cache: https://developers.facebook.com/tools/debug/
4. Test sharing the URL in WhatsApp or paste it in the debugger above.

Notes:
- If your site is single-page and meta tags are injected client-side, social crawlers may not see them. Putting the meta tags in `index.html` (done) ensures crawlers read them.
- Replace `https://your-domain.example/` in `index.html` with your real production URL for best results.
