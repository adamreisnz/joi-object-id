/* eslint no-unused-vars: off */
'use strict';

/**
 * Dependencies
 */
const {Types: {ObjectId}} = require('mongoose');

/**
 * Extend Joi with ObjectId validation
 */
module.exports = Joi => ({
  base: Joi.string(),
  name: 'string',
  language: {
    objectId: 'needs to be a valid ObjectId',
  },
  rules: [
    {
      name: 'objectId',
      setup(params) {
        this._flags.objectId = true;
      },
      validate(params, value, state, options) {
        if (value.match(/^[0-9a-fA-F]{24}$/)) {
          return new ObjectId(value);
        }
        return this.createError('string.objectId', {value}, state, options);
      },
    },
  ],
});
