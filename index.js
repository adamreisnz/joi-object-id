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

    //No value
    if (!value) {
      return;
    }

    //Convert to object ID
    if (String(value).match(/^[0-9a-fA-F]{24}$/)) {
      value = new ObjectId(value);
    }

    //Return new value
    return {value};
  },
  validate(value, helpers) {
    if (!value instanceof ObjectId) {
      const errors = helpers.error('objectId');
      return {value, errors};
    }
  },
});
