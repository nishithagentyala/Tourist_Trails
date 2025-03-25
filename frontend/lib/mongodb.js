// lib/mongodb.js
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
let cachedDb = null;

export const connectToDatabase = async () => {
  if (cachedDb) {
    // Return the cached database connection if it exists
    return cachedDb;
  }

  // Otherwise, connect to the database and cache the connection
  await client.connect();
  const db = client.db();
  cachedDb = db;
  return db;
};
