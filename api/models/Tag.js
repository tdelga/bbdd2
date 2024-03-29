/**
 * Tag.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: "string",
      required: true,
    },
    motivo: {
      type: "string",
      required: true,
    },
    transacciones: { collection: "transaccion", via: "tag" },
  },
};
