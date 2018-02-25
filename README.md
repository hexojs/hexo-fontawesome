# hexo-fontawesome
A plugin for static pages generator [Hexo](https://github.com/hexojs/hexo).
A utility function which helps to inline fontawesome SVG files.


## Installation

### Easy way

Install this plugin and all free font-awesome styles:
 
```
npm i hexo-fontawesome --save
```

### Advanced way

Install just a plugin:

```
npm i hexo-fontawesome --no-optional --save
```

Then you need to manually install all needed styles:

```
npm i @fortawesome/fontawesome-free-solid --save
npm i @fortawesome/fontawesome-free-regular --save
npm i @fortawesome/fontawesome-free-brands --save
```

## Usage

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
