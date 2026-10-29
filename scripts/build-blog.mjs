import { readFile, writeFile } from "node:fs/promises";

const FEED = "https://rohit-puri-website.vercel.app/posts.json";
const root = new URL("..", import.meta.url);

const template = await readFile(new URL("blog.template.html", root), "utf8");
const res = await fetch(FEED);
if (!res.ok) throw new Error(`Feed returned ${res.status}`);
const data = await res.json();
const json = JSON.stringify(data).replace(/</g, "\\u003c");
await writeFile(new URL("blog.html", root), template.replace("__POSTS_JSON__", json));
console.log(`blog.html: ${data.posts.length} posts`);
