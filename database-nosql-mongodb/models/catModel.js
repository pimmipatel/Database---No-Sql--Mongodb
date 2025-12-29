const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = 'nosqldb';
let db;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}

function getDb() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDatabase first.');
  }
  return db;
}

async function closeConnection() {
  try {
    await client.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing the database connection:', error);
  }
}

module.exports = {
  connectToDatabase,
  getDb,
  closeConnection,
};
