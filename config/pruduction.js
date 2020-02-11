module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  options: {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
};
