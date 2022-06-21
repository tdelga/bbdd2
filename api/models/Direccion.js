/**
 * Direccion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    calle: {
      type: "string",
      required: true,
    },
    numero: {
      type: "string",
      required: true,
    },
    ciudad: {
      type: "string",
      required: true,
    },
    provincia: {
      type: "string",
      required: true,
    },
    pais: {
      type: "string",
      required: true,
    },
    propiedad: {
      collection: "Propiedad",
      via: "direccion",
    },
  },
};
