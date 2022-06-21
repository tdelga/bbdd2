module.exports = {
  friendlyName: "Register",

  description: "Register propietario.",

  inputs: {
    nombre: {
      type: "string",
      required: true,
    },
    apellido: {
      type: "string",
      required: true,
    },
    dni: {
      type: "string",
      required: true,
    },
    propiedad: {
      type: "ref",
    },
  },

  exits: {},

  fn: async function (inputs) {
    let newPropietario = await Propietario.create({
      nombre: inputs.nombre,
      apellido: inputs.apellido,
      dni: inputs.dni,
    }).fetch();
    if (inputs.propiedad) {
      await newPropietario.addToCollection(
        newPropietario.id,
        "propiedades",
        inputs.propiedad
      );
    }
    return newPropietario;
  },
};
