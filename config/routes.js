/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "GET /": "home/index",
  "POST /transaccion/register": {
    controller: "transaccion",
    action: "register",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: " Crear Transaccion ",
      description: "Crear una transaccion",
      produces: ["application/json"],
      tags: ["Transaccion"],
      responses: {
        200: {
          description: "Transaccion creada correctamente",
        },
      },
      parameters: [
        {
          name: "monto",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "tipo",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "motivo",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "formasDePago",
          in: "body",
          required: true,
          description: "id de las Formas de pago ",
          type: "string",
        },
        {
          name: "tag",
          in: "body",
          required: true,
          description: "id del Tag ",
          type: "string",
        },
      ],
    },
  },
  "POST /tag/register": {
    controller: "tag",
    action: "register",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: " Crear Tag ",
      description: "Crear un Tag",
      produces: ["application/json"],
      tags: ["Tag"],
      responses: {
        200: {
          description: "Tag creado correctamente",
        },
      },
      parameters: [
        {
          name: "nombre",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "motivo",
          in: "body",
          required: true,
          type: "string",
        },
      ],
    },
  },
  "POST /forma-de-pago/register": {
    controller: "forma-de-pago",
    action: "register",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: " Crear Forma de pago ",
      description: "Crear una Forma de pago",
      produces: ["application/json"],
      tags: ["FormaDePago"],
      responses: {
        200: {
          description: "Forma de pago creada correctamente",
        },
      },
      parameters: [
        {
          name: "nombre",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "descripcion",
          in: "body",
          required: true,
          type: "string",
        },
      ],
    },
  },
  "POST /propiedad/register": {
    controller: "propiedad",
    action: "register",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: " Crear Propiedad ",
      description: "Crear una propiedad",
      produces: ["application/json"],
      tags: ["Propiedad"],
      responses: {
        200: {
          description: "Propiedad creada correctamente",
        },
      },
      parameters: [
        {
          name: "precio",
          in: "body",
          required: true,
          type: "float",
        },
        {
          name: "tipo",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "estado",
          in: "body",
          required: true,
          type: "number",
        },
      ],
    },
  },
  "POST /propietario/register": {
    controller: "propietario",
    action: "register",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: " Crear Propietario ",
      description: "Crear un propietario",
      produces: ["application/json"],
      tags: ["Propietario"],
      responses: {
        200: {
          description: "Propietario creada correctamente",
        },
      },
      parameters: [
        {
          name: "nombre",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "apellido",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "dni",
          in: "body",
          required: true,
          type: "string",
        },
      ],
    },
  },
  "POST /direccion/register": {
    controller: "direccion",
    action: "register",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: "Crear Direccion",
      description: "Crear una direccion",
      produces: ["application/json"],
      tags: ["Direccion"],
      responses: {
        200: {
          description: "Direccion creada correctamente",
        },
      },
      parameters: [
        {
          name: "calle",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "numero",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "ciudad",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "provincia",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "pais",
          in: "body",
          required: true,
          type: "string",
        },
      ],
    },
  },
  "POST /transaccion/alta": {
    controller: "transaccion",
    action: "alta",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: "Crear transaccion, formas de pagos y tag",
      description: "Crear una transaccion, formas de pagos y tag",
      produces: ["application/json"],
      tags: ["Transaccion"],
      responses: {
        200: {
          description: "Transaccion completa creada correctamente",
        },
      },
      parameters: [
        {
          name: "monto",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "tipo",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "motivo",
          in: "body",
          required: true,
          type: "string",
          example: "compra",
        },
        {
          name: "formasDePago",
          in: "body",
          required: true,
          schema: {
            $ref: "#/models/FormaDePago",
          },
        },
        {
          name: "tag",
          in: "body",
          required: true,
          type: "object",
        },
      ],
    },
  },
  "POST /propiedad/alta": {
    controller: "propiedad",
    action: "alta",
    skipAssets: "true",
    //swagger path object
    swagger: {
      methods: ["POST"],
      summary: "Crear propiedad, direccion y propietario",
      description: "Crear una propiedad, direccion y propietario",
      produces: ["application/json"],
      tags: ["Propiedad"],
      responses: {
        200: {
          description: "Propiedad completa creada correctamente",
        },
      },
      parameters: [
        {
          name: "precio",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "tipo",
          in: "body",
          required: true,
          type: "string",
        },
        {
          name: "estado",
          in: "body",
          required: true,
          type: "string",
          description: "pop",
          example: "compra",
        },
        {
          name: "direccion",
          in: "body",
          required: true,
          schema: {
            $ref: "#/models/FormaDePago",
          },
        },
        {
          name: "propietarios",
          in: "body",
          required: true,
          type: "object",
        },
      ],
    },
  },
};
