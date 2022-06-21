/**
 * FormaDePago.js
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
    descripcion: {
      type: "string",
      required: true,
    },
    transacciones: { collection: "Transaccion", via: "formasDePago" },
  },
};
