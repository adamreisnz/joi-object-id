'use strict';

/**
 * Dependencies
 */
const {Types: {ObjectId}} = require('mongoose');

/**
 * Extend Joi with ObjectId validation
 */
module.exports = Joi => ({
  type: 'objectId',
  base: Joi.any(),
  messages: {
    objectId: 'needs to be a valid ObjectId',
  },
  coerce(value) {
    value = new ObjectId(value);
    return {value};
  },
  validate(value, helpers) {
    if (!String(value).match(/^[0-9a-fA-F]{24}$/)) {
      const errors = helpers.error('objectId');
      return {value, errors};
    }
  },
});
