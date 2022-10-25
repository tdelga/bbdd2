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
    },
    propietarios: {
      collection: "Propietario",
      via: "propiedades",
    },
  },
  beforeDestroy: async function (criteria, cb) {
    // Destroy any user associated to a deleted pet
    await Propiedad.findOne(criteria.where)
      .populate("propietarios")
      .exec(async function (err, propiedad) {
        if (err) return cb(err);
        if (propiedad.propietarios.length > 0) {
          await Propietario.destroy({
            id: propiedad.propietarios.map((e) => e.id),
          }).fetch();
        }
        cb();
      });
    await Propiedad.findOne(criteria.where)
      .populate("direccion")
      .exec(async function (err, propiedad) {
        if (err) return cb(err);
        if (propiedad.direccion) {
          await Direccion.destroy({ id: propiedad.direccion.id }).fetch();
        }
        cb();
      });
  },
};
