module.exports = {
  friendlyName: "Register",

  description: "Register forma de pago.",

  inputs: {
    nombre: {
      type: "string",
      required: true,
    },
    descripcion: {
      type: "string",
      required: true,
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
    let formaDePago = await FormaDePago.create({
      nombre: inputs.nombre,
      descripcion: inputs.descripcion,
    }).fetch();
    return formaDePago;
  },
};
