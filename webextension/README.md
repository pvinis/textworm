# TextWorm


## What?

Gain the ability to search your full browser history for any text. Full-text search. Locally. Finally.

Tested on Firefox.


## Developing

### Testing

- Run `yarn start`
- Check http://localhost:3000/popup.html, http://localhost:3000/options.html, etc

### Testing in the browser

- Run `yarn build:watch`
- Go to `about:debugging#/runtime/this-firefox` and `Load Temporary Add-on...`
- Select `build/popup.html`


## Shoulders of giants

- https://github.com/fregante/browser-extension-template
- https://github.com/mdn/webextensions-examples
