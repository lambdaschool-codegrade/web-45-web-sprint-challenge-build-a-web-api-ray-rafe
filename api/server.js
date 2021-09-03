const express = require("express");
const server = express();

server.use(express.json());
module.exports = server;

require("./projects/projects-router");
require("./actions/actions-router");
