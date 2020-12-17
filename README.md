# ocw-www

## testimonials

Testimonials are stored as Markdown files managed by Hugo. To create a new one
you can use `hugo new` like this:

```
hugo -s site new testimonials/firstname-lastname.md
```

the filename of `firstname-lastname.md` will allow hugo to automatically pull
the testimonial student's name out. Once you run the command there will be a
new file in `site/content/testimonials/` with some placeholder content. Edit
that file to add the content for that student.
