# hexo-fontawesome

A plugin for static pages generator [Hexo](https://github.com/hexojs/hexo).
A utility function which helps to inline fontawesome SVG files.

## Installation

### Requirements

- NodeJS at least 16.x

### Easy way

Install this plugin and all free font-awesome styles:

```
npm install hexo-fontawesome --save
```

### Advanced way

Install just a plugin:

```
npm install hexo-fontawesome --no-optional --save
```

Then you need to manually install all needed styles:

```
npm install @fortawesome/free-solid-svg-icons --save
npm install @fortawesome/free-regular-svg-icons --save
npm install @fortawesome/free-brands-svg-icons --save
```

### Difference between version 2.x and 1.x

Font Awesome change package names in 5.1
https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md#50x-to-510

It's significant change enough for `hexo-fontawesome` to bump major version here.

#### How to migrate from 1.x to 2.x

1. Uninstall icon packages if you did it manually:

```
npm uninstall @fortawesome/fontawesome-free-solid
npm uninstall @fortawesome/fontawesome-free-regular
npm uninstall @fortawesome/fontawesome-free-brands
```

2. Install their 5.1+ alternatives

```
npm install @fortawesome/free-solid-svg-icons --save
npm install @fortawesome/free-regular-svg-icons --save
npm install @fortawesome/free-brands-svg-icons --save
```

## Usage

### In theme

This plugin adds a view helpers you can use in the theme to include inline SVG icons
from the font-awesome collection.

#### fa_css()

Returns inline styles needed for the inline SVGs.

Example usage:

```
<style>
  <%- fa_css() %>
</style>
```

#### fa_inline(iconName, options)

Returns an SVG markup of the chosen icon.

Possible options:

- `prefix` - the style prefix, `fab` for brands, `fas` for solid etc. Defaults to `fas`

```
<%- fa_inline('twitter', {prefix: 'fab'}) %>
```

### In post

This plugin adds a tag that you can use in the theme to include inline SVG icons
from the font-awesome collection.

#### {% fa_css %}

Returns inline styles needed for the inline SVGs.

Example usage:

```
# My
## Post
### Content
#### Here

{% fa_css %}
```

#### {% fa_inline iconName [prefix] %}

Returns an SVG markup of the chosen icon.
`prefix` is the style prefix, `fab` for brands, `fas` for solid etc. Defaults to `fas`

Example usage:

```
# My
## Post
### Content
{% fa_inline twitter fab %}
#### Here


{% fa_css %}
```
