# ocw-www

## Running the site locally

#### Dependencies

- If running for the first time, or if dependencies have changed, install
  dependencies: `yarn install`
- This site requires a running instance of `ocw-studio` for some functionality
  (the [repo](https://github.com/mitodl/ocw-studio) has instructions for
  running this locally).

#### environment variables

For development you'll need to set a few environment variables. The
`.env.example` file has example values for `SEARCH_API_URL` and
`OCW_STUDIO_BASE_URL`, set those to the URLs where you run those services.

#### Run the website

```bash
npm start
```

## Testimonials

Testimonials are stored as Markdown files managed by Hugo. To create a new one
you can use `hugo new` like this:

```
hugo -s site new testimonials/firstname-lastname.md
```

the filename of `firstname-lastname.md` will allow hugo to automatically pull
the testimonial student's name out. Once you run the command there will be a
new file in `site/content/testimonials/` with some placeholder content. Edit
that file to add the content for that student.

## Homepage Promo Carousel

These are checked into the repo, stored as Markdown files managed by Hugo. To
create a new one you can use `hugo new` like this:

```
hugo -s site new promos/filename.md
```

You'll then also need to check an image file into
`site/static/images/promo-carousel/` and add it to the front matter in the file
you just created, alongside the URL for the promo. You'll also need to set a
title, subtitle, and link text.
