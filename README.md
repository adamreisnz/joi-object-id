# @meanie/joi-object-id

[![npm version](https://img.shields.io/npm/v/@meanie/joi-object-id.svg)](https://www.npmjs.com/package/@meanie/joi-object-id)
[![node dependencies](https://david-dm.org/meanie/joi-object-id.svg)](https://david-dm.org/meanie/joi-object-id)
[![github issues](https://img.shields.io/github/issues/meanie/joi-object-id.svg)](https://github.com/meanie/joi-object-id/issues)


A Joi extension to automatically convert ISO date strings to object-id objects

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

### Features
- Extends the existing `string` validator
- Validates incoming values as MongoDB ObjectId values
- Automatically converts values to Mongoose `ObjectId` instances

### Installation

```shell
#npm
npm install @meanie/joi-object-id

#yarn
yarn add @meanie/joi-object-id
```

### Usage
```js
const Joi = require('@hapi/joi');
const JoiObjectId = require('@meanie/joi-object-id');

module.exports = Joi.extend(JoiObjectId);
```

### Examples

```js
const schema = Joi.object({
  user: Joi.string().objectId(),
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-joi-object-id issue tracker](https://github.com/meanie/joi-object-id/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2019-2020, Adam Reis
