module.exports = {
  friendlyName: "Register a transacction",

  description: "Register transaccion.",

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
    propiedad: {
      type: "ref",
    },
    formasDePago: {
      type: "ref",
    },
    tag: {
      type: "ref",
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "Transaccion created successfully.",
    },
    badRequest: {
      statusCode: 400,
      description: "Bad request.",
    },
    notFound: {
      statusCode: 404,
      description: "Not found.",
    },
    serverError: {
      statusCode: 500,
      description: "Internal server error.",
    },
  },

  fn: async function (inputs) {
    let newTransaccion = await Transaccion.create({
      monto: inputs.monto,
      tipo: inputs.tipo,
      motivo: inputs.motivo,
      propiedad: inputs.propiedad,
      tag: inputs.tag,
    }).fetch();
    //add formas de pago
    if (inputs.formasDePago) {
      await Transaccion.addToCollection(newTransaccion.id, "formasDePago", [
        inputs.formasDePago,
      ]);
    }
    return newTransaccion;
  },
};
