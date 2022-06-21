module.exports = {
  friendlyName: "Register",

  description: "Register tag.",

  inputs: {
    nombre: {
      type: "string",
      required: true,
    },
    motivo: {
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
    let newTag = await Tag.create({
      nombre: inputs.nombre,
      motivo: inputs.motivo,
    }).fetch();
    return newTag;
  },
};
