import { MongoClient } from "mongodb";
import { environment } from "@/config/environment";

const uri = environment.mongodbUri;

if (!uri) {
    throw new Error('MONGODB_URI not defined');
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const getDb = async () => {
    const connectedClient = await clientPromise;
    return connectedClient.db();
}