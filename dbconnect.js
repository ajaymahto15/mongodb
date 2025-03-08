console.log("Hello, connecting to MongoDB!")

const {MongoClient} = require("mongodb");
const url = "mongodb+srv://maiden:PASSWORD@maiden.qqkb3.mongodb.net/?retryWrites=true&w=majority&appName=maiden"
const client = new MongoClient(url)

// Writing function to connect to db and get records from db

const connectionToDb = async () => {
    try {
        await client.connect();
        const db = client.db('users');
        console.log('Connected to database:', db.databaseName);
        
        const collection = db.collection('users');

        // Insert 
        newUser = {
            name: 'Bob Brown',
            age: 35,
            email: 'bob.brown@example.com',
            isActive: true,
            address: {
                city: 'Hyderabad',
                pincode: 500084
            }
        }
        collection.insertOne(newUser)
        const data = await collection.find({}).toArray(); // Await the toArray() call
        console.log('Collection data:', data);
    } catch (err) {
        console.error('An error occurred while connecting to the database:', err);
    } finally {
        await client.close(); // Ensure the client is closed at the end
    }
};

connectionToDb();