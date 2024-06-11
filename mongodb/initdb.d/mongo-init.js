db = db.getSiblingDB("custom_db");

db.createUser({
    user: "test",
    pwd: "test",
    roles: [{
        role: "readWrite",
        db: "custom_db"
    }]
});

db.createCollection("custom_collection");