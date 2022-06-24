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
      methods: ["GET", "POST"],
      summary: " Get Groups ",
      description: "Get Groups Description",
      produces: ["application/json"],
      tags: ["Groups"],
      responses: {
        200: {
          description: "List of Groups",
          schema: "Group", // api/model/Group.js,
          type: "array",
        },
      },
      parameters: [],
    },
  },
  "POST /transaccion/alta": "transaccion/alta",
  "POST /tag/register": "tag/register",
  "POST /forma-de-pago/register": "forma-de-pago/register",
};
