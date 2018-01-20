# eslint-config-mono [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/monojack/eslint-config-mono/master.svg
[travis-url]: https://travis-ci.org/monojack/eslint-config-mono
[npm-image]: https://img.shields.io/npm/v/eslint-config-mono.svg
[npm-url]: https://npmjs.org/package/eslint-config-mono
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-mono.svg
[downloads-url]: https://npmjs.org/package/eslint-config-mono

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) heavily based on [JavaScript Standard Style](http://standardjs.com)

>*Note: This is really intended for personal use, but feel free to use it if it looks good to you*

## Install

```bash
npm install eslint-config-mono
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
npm install -D -E eslint-config-mono eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Then, add this to your `.eslintrc` file:

```json
{
  "extends": "mono"
}
```

## Custom rules

```json
{
  "array-bracket-spacing": ["warn", "always"],
  "comma-dangle": ["warn", {
    "arrays": "always",
    "objects": "always",
    "imports": "always",
    "exports": "always",
    "functions": "ignore"
    }],
  "quote-props": ["warn", "as-needed", { "keywords": true }],
  "no-sequences": ["off"],
  "no-console": ["warn"],
  "object-curly-spacing": ["warn", "always"],
  "standard/object-curly-even-spacing": ["off"]
}
```
