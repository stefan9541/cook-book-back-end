module.exports = {
  port: "8080",
  mongoUri:
    "mongodb+srv://Stepan:2h8RZMxRYyKynSlp@cluster0-qvftd.gcp.mongodb.net/test?retryWrites=true&w=majority&ssl=true&authSource=admin",
  options: {
    dbName: "Cook-book",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
};
