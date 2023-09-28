import mongoose from 'mongoose'
const {Types: {ObjectId}} = mongoose

/**
 * Extend Joi with ObjectId validation
 */
export default Joi => ({
  type: 'objectId',
  base: Joi.any(),
  messages: {
    objectId: 'needs to be a valid ObjectId',
  },
  coerce(value) {

    //No value
    if (!value) {
      return
    }

    //Convert string to object ID
    if (typeof value === 'string' && value.match(/^[0-9a-fA-F]{24}$/)) {
      value = new ObjectId(value)
    }

    //Return new value
    return {value}
  },
  validate(value, helpers) {
    if (!(value instanceof ObjectId)) {
      const errors = helpers.error('objectId')
      return {value, errors};
    }
  },
})
