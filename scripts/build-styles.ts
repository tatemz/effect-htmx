import { globalStylesheet } from "../src/stylesheets.ts";

const out = new URL("../dist/styles.css", import.meta.url);

await Bun.write(out, `${globalStylesheet}\n`);
console.log(`Wrote ${out.pathname}`);
