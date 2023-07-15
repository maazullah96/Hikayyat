

(PORT = process.env.PORT || 5000), (NODE_ENV = "development");
MONGO_URI =
  process.env.MONGO_URI ||
  
SESS_NAME = "sid";
SESS_SECRET = "secret!session";
SESS_LIFETIME = 1000 * 60 * 60 * 2;

// (PORT = 5000), (NODE_ENV = "development");
// MONGO_URI = "mongodb://localhost/mern-crud";
// SESS_NAME = "sid";
// SESS_SECRET = "secret!session";
// SESS_LIFETIME = 1000 * 60 * 60 * 2;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO_URI,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME
};
// export const { PORT = 5000, NODE_ENV = "development" } = process.env;
