const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:singhrocks@cluster0.exdqx.mongodb.net/restaurant-reservation-system?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});