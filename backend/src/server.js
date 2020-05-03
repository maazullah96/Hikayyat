const express = require("express");
const mongoose = require("mongoose");
const connectStore = require("connect-mongo");
const session = require("express-session");
// const userRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const sessionRoutes = require("./routes/session");
const categoryRoutes = require("./routes/category");
const excreptRoutes = require("./routes/excrept");

var config = require("./config.js");
const PORT = config.PORT;
const NODE_ENV = config.NODE_ENV;
const MONGO_URI = config.MONGO_URI;
const SESS_NAME = config.SESS_NAME;
const SESS_SECRET = config.SESS_SECRET;
const SESS_LIFETIME = config.SESS_LIFETIME;

(async () => {
  try {
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("MongoDB connected");

    const app = express();
    app.disable("x-powered-by");
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    const MongoStore = connectStore(session);
    app.use(
      session({
        name: SESS_NAME,
        secret: SESS_SECRET,
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          collection: "session",
          ttl: parseInt(SESS_LIFETIME) / 1000
        }),
        cookie: {
          sameSite: true,
          secure: NODE_ENV === "production",
          maxAge: parseInt(SESS_LIFETIME)
        }
      })
    );

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    const apiRouter = express.Router();
    app.use("/api", apiRouter);
    app.use("/categories", categoryRoutes);
    app.use("/excrept", excreptRoutes);
    apiRouter.use("/users", userRoutes);
    apiRouter.use("/session", sessionRoutes);
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
