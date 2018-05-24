var fontawesome = require('@fortawesome/fontawesome');

function tryInstall(block) {
  try {
    var icons = block().default
    fontawesome.library.add(icons)
    return true
  } catch(ex) {
    return false
  }
}

tryInstall(function () { return require('@fortawesome/fontawesome-free-solid') })
tryInstall(function () { return require('@fortawesome/fontawesome-free-regular') })
tryInstall(function () { return require('@fortawesome/fontawesome-free-brands') })

function faCss() {
  return fontawesome.dom.css()
}

function faInline(iconName, opts) {
  var options = opts || {prefix: 'fas'}
  var icon = fontawesome.icon({ prefix: options.prefix, iconName: iconName })
  if (!icon) {
    throw new Error('Can not find icon "' + iconName +'" with prefix "' + options.prefix + '"')
  }
  return icon.html
}

hexo.extend.helper.register('fa_css', faCss)
hexo.extend.helper.register('fa_inline', faInline)

hexo.extend.tag.register('fa_css', function () {
  return '<style>' + faCss() + '</style>'
})

hexo.extend.tag.register('fa_inline', function (args) {
  var iconName = args[0]
  var prefix = args[1] || 'fas'
  return faInline(iconName, {prefix: prefix})
})
