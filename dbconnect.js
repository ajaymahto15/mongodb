console.log("Hello, connecting to MongoDB!")

const {MongoClient} = require("mongodb");
const url = "mongodb+srv://maiden:Npci@123@maiden.qqkb3.mongodb.net/?retryWrites=true&w=majority&appName=maiden";

const client = new MongoClient(url);

// Writing function to connect to db and get records from db

const connectionToDb = async() => {
    try {

    } catch(err) {
        if (err) {
            throw err
        }
    }
    await client.connect();
    const db = client.db('maiden');
    const  collection = db.collection('users');
    const data = collection.find({}).toArray();
    console.log(data)
} 