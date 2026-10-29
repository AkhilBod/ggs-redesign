# Rohit Puri site redesign

Static redesign of rohit-puri-website.vercel.app and ggsgroup.com with the same content.

| Path | Page |
| --- | --- |
| `/` | Home |
| `/career` | Oracle career |
| `/products` | Products & Practice |
| `/blog` | Blog |
| `/ggs` | Golden Gate Solutions home |

Plain HTML and CSS, no build step. `rohit.css` styles the personal site; `ggs/index.html` carries its own styles.

## Blog

`blog.html` ships with a snapshot of the posts and then loads the live feed from
`https://rohit-puri-website.vercel.app/posts.json` in the browser, so new daily posts show up without a redeploy.
To refresh the snapshot:

```bash
node scripts/build-blog.mjs
```

Edit `blog.template.html`, not `blog.html`.

## Before replacing the live site

- Product images in `images/` are the 560px versions from the current site. Swap in full-size screenshots.
- Every page is `noindex` (meta tag and `X-Robots-Tag` in `vercel.json`) because this is a preview. Remove both when it goes live on the real domain, along with the "Redesign preview" footer lines.
- If this replaces the current site, point the blog's feed URL at the new location of `posts.json`.
