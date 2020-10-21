const mongoose = require('mongoose');
const db = mongoose.connection;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const DB_URL = 'mongodb://localhost:27017/freelancer';

mongoose
  .connect(DB_URL, options)
  .then(() => {
    console.log('DB READY TO USE');
  })
  .catch((err) => {
    console.log('ERR: ', err);
  });

db.on('error', (err) => console.log('ERR:', err.message));

db.on('connected', () => console.log('MONGO CONNECTED'));

db.on('disconnected', () => console.log('MONGO DISCONNECTED'));