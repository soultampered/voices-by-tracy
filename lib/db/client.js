import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

// Global variable to maintain a cached connection across hot reloads (Next.js dev)
let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getDb() {
    const client = await clientPromise;
    return client.db();
}
