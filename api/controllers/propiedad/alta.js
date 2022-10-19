module.exports = {
  friendlyName: "Alta",

  description: "Alta propiedad.",

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
      type: "json",
    },
    propietarios: {
      type: ["json"],
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    let newPropiedad = await Propiedad.create({
      precio: inputs.precio,
      tipo: inputs.tipo,
      estado: inputs.estado,
    }).fetch();

    //add propietarios
    if (inputs.propietarios) {
      inputs.propietarios.forEach(async (propietario) => {
        let newPropietario = await Propietario.create({
          nombre: propietario.nombre,
          apellido: propietario.apellido,
          dni: propietario.dni,
        }).fetch();
        await Propiedad.addToCollection(newPropiedad.id, "propietarios", [
          newPropietario.id,
        ]);
      });
    }

    if (inputs.direccion) {
      let newDireccion = await Direccion.create({
        calle: inputs.direccion.calle,
        numero: inputs.direccion.numero,
        ciudad: inputs.direccion.ciudad,
        provincia: inputs.direccion.provincia,
        pais: inputs.direccion.pais,
      }).fetch();
      await Propiedad.update({ id: newPropiedad.id }).set({
        direccion: newDireccion.id,
      });
    }

    const propiedadCreada = await Propiedad.findOne({
      id: newPropiedad.id,
    });
    return propiedadCreada;
  },
};
