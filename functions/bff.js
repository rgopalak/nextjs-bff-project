// functions/bff.js
const express = require('express');
const serverless = require('serverless-http');
const app = require('../bff/src/index');

module.exports.handler = serverless(app);