/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
  });
  const db = await client.db(MONGODB_DB);

  cachedDb = db;
  return db;
}
