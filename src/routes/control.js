const { Router } = require("express");
const route = Router();

const { ensureAuthentication } = require("../helpers/auth");
const { getControl } = require("../controllers/controlCtrl");

route.route("/app/car/").get(ensureAuthentication, getControl);

module.exports = route;
