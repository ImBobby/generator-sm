# Suit-baze SCSS module

[![Greenkeeper badge](https://badges.greenkeeper.io/ImBobby/suit-baze-scss-module.svg)](https://greenkeeper.io/)

A file generator to create SCSS module file for [Suit-baze](https://github.com/ImBobby/suit-baze)

Requirement:

* node v4+

## Install and usage

```Bash
npm i -g suit-baze-scss-module
```

### Usage example

```Bash
sm header
```

File `_header.scss` will be created in `dev/sass/modules` and file `_modules.scss` will automatically import `_header.scss`

**`sm` will look for directory `dev/sass/modules` so make sure to run this command where that directory placed.**

## Test

1. Clone this repo to local machine
2. `cd` into directory
3. run `npm i`
4. run `npm test`
