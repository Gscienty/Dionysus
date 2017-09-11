package org.Dionysus.Component;

import org.bson.Document;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Repository;

import com.mongodb.Function;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;

@EnableAutoConfiguration
@Repository
public class MongoExecutor {
    private final String connectionString = "localhost";
    public <T> T execute(String collectionName, Function<MongoCollection<Document>, T> func) {
        MongoClient client = new MongoClient(connectionString, 27017);
        MongoCollection<Document> collection = client.getDatabase("dionysus").getCollection(collectionName);
        T result = func.apply(collection);
        client.close();

        return result;
    }
}