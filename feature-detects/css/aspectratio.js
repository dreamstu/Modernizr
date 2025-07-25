/*!
{
  "name": "aspectratio css property",
  "property": "aspectratio",
  "tags": ["css aspectratio", "aspect-ratio"],
  "builderAliases": ["aspectratio"],
  "caniuse":"mdn-css_properties_aspect-ratio",
  "authors": ["Debadutta Panda"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"
  }]
}
!*/
/* DOC
Detect working status of all aspectratio css property
https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
*/
define(['Modernizr', 'createElement', 'test/css/supports'], function (Modernizr, createElement) {
  Modernizr.addTest("aspectratio", function () {
    var CSS = window.CSS;
    if (Modernizr.supports && CSS.supports('aspect-ratio', '1 / 1')) {
      return true;
    }

    var element = createElement('p'),
          elStyle = element.style
    if ('aspectRatio' in elStyle) {
      elStyle.cssText = 'aspect-ratio:1 / 1'
      element.remove()
      return (elStyle['aspectRatio'] === '1 / 1');
    } else {
      element.remove();
      return false;
    }
  });
});
