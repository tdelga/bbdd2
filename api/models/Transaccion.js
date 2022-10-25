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
  beforeDestroy: async function (criteria, cb) {
    // Destroy any user associated to a deleted pet
    await Transaccion.findOne(criteria.where)
      .populate("formasDePago")
      .exec(async function (err, transaccion) {
        if (err) return cb(err);
        if (transaccion.formasDePago.length > 0) {
          await FormaDePago.destroy({
            id: transaccion.formasDePago.map((e) => e.id),
          }).fetch();
        }
        cb();
      });
    await Transaccion.findOne(criteria.where)
      .populate("tag")
      .exec(async function (err, transaccion) {
        if (err) return cb(err);
        if (transaccion.tag) {
          await Tag.destroy({ id: transaccion.tag.id }).fetch();
        }
        cb();
      });
  },
};
