module.exports = {
  friendlyName: "Register",

  description: "Register direccion.",

  inputs: {
    calle: {
      type: "string",
      required: true,
    },
    numero: {
      type: "string",
      required: true,
    },
    ciudad: {
      type: "string",
      required: true,
    },
    provincia: {
      type: "string",
      required: true,
    },
    pais: {
      type: "string",
      required: true,
    },
    propiedad: {
      type: "ref",
    },
  },

  exits: {},

  fn: async function (inputs) {
    let newDireccion = await Direccion.create({
      calle: inputs.calle,
      numero: inputs.numero,
      ciudad: inputs.ciudad,
      provincia: inputs.provincia,
      pais: inputs.pais,
    }).fetch();
    if (inputs.propiedad) {
      await newDireccion.addToCollection(
        newDireccion.id,
        "propiedades",
        inputs.propiedad
      );
    }
    return newDireccion;
  },
};
