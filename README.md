# @reis/joi-object-id

[![npm version](https://img.shields.io/npm/v/@reis/joi-object-id.svg)](https://www.npmjs.com/package/@reis/joi-object-id)
[![github issues](https://img.shields.io/github/issues/adamreisnz/joi-object-id.svg)](https://github.com/adamreisnz/joi-object-id/issues)


A Joi extension to automatically convert ISO date strings to object-id objects

### Features
- Extends the existing `string` validator
- Validates incoming values as MongoDB ObjectId values
- Automatically converts values to Mongoose `ObjectId` instances

### Installation

```shell
#npm
npm install @reis/joi-object-id

#yarn
yarn add @reis/joi-object-id
```

### Usage
```js
import Joi from 'joi'
import JoiObjectId from '@reis/joi-object-id'

export default Joi.extend(JoiObjectId)
```

### Examples

```js
const schema = Joi.object({
  userId: Joi.string().objectId(),
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [joi-object-id issue tracker](https://github.com/adamreisnz/joi-object-id/issues).

## License

(MIT License)

Copyright 2019-2023, Adam Reis
