/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      api: 'https://fonts.googleapis.com/css2',
      families: ['Public+Sans:wght@300;400;500;600;700&display=swap'],
    },
  })
}

export default function () {
  loadFonts()
}
