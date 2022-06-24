module.exports = {
  friendlyName: "Alta",

  description: "Alta transaccion.",

  inputs: {
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
    formasDePago: {
      type: ["json"],
    },
    tag: {
      type: "json",
    },
    /*     propiedad: {
      type: "ref",
    }, */
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    let newTransaccion = await Transaccion.create({
      monto: inputs.monto,
      tipo: inputs.tipo,
      motivo: inputs.motivo,
      //propiedad: inputs.propiedad,
    }).fetch();
    //add formas de pago
    if (inputs.formasDePago) {
      inputs.formasDePago.forEach(async (formaDePago) => {
        let newFormaDePago = await FormaDePago.create({
          nombre: formaDePago.nombre ?? "",
          descripcion: formaDePago.descripcion ?? "",
        }).fetch();
        await Transaccion.addToCollection(newTransaccion.id, "formasDePago", [
          newFormaDePago.id,
        ]);
      });
    }
    if (inputs.tag) {
      let newTag = await Tag.create({
        nombre: inputs.tag.nombre,
        motivo: inputs.tag.motivo,
      }).fetch();
      await Transaccion.update({ id: newTransaccion.id }).set({
        tag: newTag.id,
      });
    }
    const transaccionCreada = await Transaccion.findOne({
      id: newTransaccion.id,
    });
    return transaccionCreada;
  },
};
