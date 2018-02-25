var fontawesome = require('@fortawesome/fontawesome');

function tryInstall(block) {
  try {
    var icons = block().default;
    fontawesome.library.add(icons)
    return true
  } catch(ex) {
    return false
  }
}

tryInstall(function () { return require('@fortawesome/fontawesome-free-solid') })
tryInstall(function () { return require('@fortawesome/fontawesome-free-regular') })
tryInstall(function () { return require('@fortawesome/fontawesome-free-brands') })

hexo.extend.helper.register('fa_css', function () {
  return fontawesome.dom.css()
});

hexo.extend.helper.register('fa_inline', function (iconName, opts) {
  var options = opts || {prefix: 'fas'}

  return fontawesome.icon({ prefix: options.prefix, iconName: iconName }).html
});
