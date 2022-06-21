/**
 * Transaccion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    monto: {
      type: "number",
      required: true,
    },
    tipo: {
      type: "string",
      isIn: ["ingreso", "egreso"],
      required: true,
    },
    motivo: {
      type: "string",
      required: true,
    },
    propiedad: {
      model: "Propiedad",
    },
    formasDePago: {
      collection: "FormaDePago",
      via: "transacciones",
    },
    tag: {
      model: "Tag",
    },
  },
};
