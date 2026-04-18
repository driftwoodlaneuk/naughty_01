# Simple GitHub Pages landing page

This site displays a message and then zooms into the SVG image.

## Structure

- `index.html`
- `css/style.css`
- `js/main.js`
- `img/middle-finger-svgrepo-com.svg`

## Custom message via URL

The heading can be changed with the `message` query parameter.

### Default

If no parameter is provided, the page shows:

`I love you lots, but`

### Example

`https://your-site.example/?message=I%20don't%20like%20you`

You can also wrap the message in quotes if you want, for example:

`https://your-site.example/?message='I%20don't%20like%20you'`

The JavaScript removes matching leading and trailing single or double quotes automatically.
