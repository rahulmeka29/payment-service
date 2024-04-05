module.exports = app => {
    const payment = require("../payment.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/create", payment.create);
    router.post("/success", payment.success);
    // Create a new Tutorial
    app.use("/api/payment", router);
  };