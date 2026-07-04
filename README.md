# webpage-skeleton

A minimal 11ty (Eleventy) template for a personal site: short bio/CV and a
list of links and publications. Content and layout are kept separate so this
template can be public while real personal data stays local.

## Structure

- `src/_includes/base.njk` — page layout
- `src/index.njk` — the single page, pulling in data from the `site` global data object
- `src/css/style.css` — styling
- `src/_data/site.example.json` — placeholder content shape (safe to commit)
- `src/_data/site.json` — your real content (gitignored, create it yourself)

## Getting started

```sh
npm install
cp src/_data/site.example.json src/_data/site.json
# edit src/_data/site.json with your real name, links, CV, publications
npm run serve
```

## Deploying

Deployment is a manual, local build + `rsync` over SSH — no CI/CD.

```sh
cp deploy.env.example deploy.local.env
# edit deploy.local.env with your SSH host alias and server doc root path
./deploy.sh
```

`deploy.local.env` is gitignored, so no hostname, path, or other server
details ever get committed to this repo.

## License

The code in this repository is released under the [MIT License](LICENSE) —
free for anyone to use, modify, and redistribute.

The bundled web fonts in `src/fonts/` are a subset of **Liberation Sans**,
which is licensed separately under the SIL Open Font License 1.1 (see
[`src/fonts/OFL.txt`](src/fonts/OFL.txt)). Liberation Sans is metric-compatible
with Arial/Helvetica, so the site renders consistently across operating systems
without depending on proprietary fonts.
