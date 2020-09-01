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
      try {
        value = new ObjectId(value);
      }
      catch (error) {
        value = null;
      }
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
