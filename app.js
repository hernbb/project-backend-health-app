require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware"); // <== IMPORT


const app = express();
require("./config")(app);


// 👇 MIDDLEWARE MISSING
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

const pruebasRouter = require("./routes/pruebas.routes");
app.use("/api/pruebas",isAuthenticated, pruebasRouter);           

const profileRouter = require("./routes/profile.routes");
app.use("/api/profile", isAuthenticated, profileRouter); 

const carritoRouter = require("./routes/pruebas.routes");
app.use("/api/carrito", isAuthenticated, carritoRouter);  


module.exports = app;
