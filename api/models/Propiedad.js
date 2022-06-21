/**
 * Propiedad.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    precio: {
      type: "number",
      required: true,
    },
    tipo: {
      type: "string",
      required: true,
    },
    estado: {
      type: "string",
      required: true,
    },
    direccion: {
      model: "direccion",
      required: true,
    },
    propietarios: {
      collection: "Propietario",
      via: "propiedades",
    },
  },
};
