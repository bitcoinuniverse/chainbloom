import { access, readFile } from 'node:fs/promises';

const required = [
  '../site/index.html',
  '../site/styles.css',
  '../site/app.js',
  '../site/assets/chainbloom-logo.svg',
  '../site/assets/chainbloom-mark.svg',
];

await Promise.all(required.map((path) => access(new URL(path, import.meta.url))));
const html = await readFile(new URL('../site/index.html', import.meta.url), 'utf8');
for (const requiredText of ['ChainBloom', 'How it works', 'No token', 'Security']) {
  if (!html.includes(requiredText)) {
    throw new Error(`site/index.html is missing required copy: ${requiredText}`);
  }
}

console.log('Static site checks passed.');
