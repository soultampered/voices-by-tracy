# MongoDB Setup for Next.js Project (voicesByTracy)

This README contains all instructions to set up a local MongoDB instance for the `voicesByTracy` Next.js project, including starting MongoDB, connecting from Next.js, and creating indexes for media search. Everything is included in one file.

---

## 1. Start MongoDB

Run the following commands in your terminal to create a database folder and start MongoDB:

## 2. Setup Index
node lib/db/setupIndexes.js


```bash
# Create a folder for the database
mkdir -p ~/mongodb-data

# Start MongoDB on a custom port (27018)
mongod --port 27018 --dbpath ~/mongodb-data
