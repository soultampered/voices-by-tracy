import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('MONGO_URI not defined');
}

const client = new MongoClient(uri);

export const getDb = async () => {
    await client.connect();
    return client.db();
}