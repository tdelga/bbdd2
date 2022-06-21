module.exports = {
  friendlyName: "Register",

  description: "Register propiedad.",

  inputs: {
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
      type: "ref",
    },
    propietario: {
      type: "ref",
    },
  },

  exits: {},

  fn: async function (inputs) {
    let newPropiedad = await Propiedad.create({
      precio: inputs.precio,
      tipo: inputs.tipo,
      estado: inputs.estado,
    }).fetch();
    if (inputs.direccion) {
      await newPropiedad.addToCollection(
        newPropiedad.id,
        "direcciones",
        inputs.direccion
      );
    }
    if (inputs.propietario) {
      await newPropiedad.addToCollection(
        newPropiedad.id,
        "propietarios",
        inputs.propietario
      );
    }
    return newPropiedad;
  },
};
