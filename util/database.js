const { MongoClient } = require('mongodb');

let _db;

const mongoConnect = callback => {
  const uri = 'mongodb+srv://mac45:lPx9yjgXrn0wPCuh@cluster0.rwhns6e.mongodb.net/mydb';

  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      console.log('Connected to MongoDB Atlas!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log('MongoDB Atlas Connection Error:', err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
