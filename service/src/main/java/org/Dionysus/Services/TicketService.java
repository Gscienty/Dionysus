package org.Dionysus.Services;

import org.Dionysus.Component.MongoExecutor;
import org.Dionysus.Component.NameDictionary;
import org.Dionysus.InteractionEntity.TicketEntity;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;

import com.mongodb.QueryOperators;

@EnableAutoConfiguration
@Service
public class TicketService {

    @Autowired
    private MongoExecutor exector;

    @Autowired
    private NameDictionary nameDictionary;

    public Boolean create(String userIdentity) {
        return exector.execute("ticket", collection -> {
            Document ticket = new Document();
            ticket.append("user_identity", userIdentity);
            ticket.append("created_time", System.currentTimeMillis());
            ticket.append("expire_time", System.currentTimeMillis() + 86400l);
            ticket.append("name", nameDictionary.getName());
            ticket.append("code", System.currentTimeMillis());
            collection.insertOne(ticket);
            return true;
        });
    }

    public TicketEntity getUserTicket(String userIdentity) {
        return exector.execute("ticket", collection -> {
            Document queryDocument = new Document();
            queryDocument.append("user_identity", userIdentity);
            queryDocument.append("expire_time", new Document(QueryOperators.GTE, System.currentTimeMillis()));
            Document ticket = collection.find(queryDocument).first();
            if (ticket.isEmpty()) {
                return null;
            } else {
                return bsonToTicket(ticket);
            }
        });
    }

    public TicketEntity getTicket(String ticketCode) {
        return exector.execute("ticket", collection -> {
            Document queryDocument = new Document();
            queryDocument.append("code", ticketCode);
            queryDocument.append("expire_time", new Document(QueryOperators.GTE, System.currentTimeMillis()));
            Document ticket = collection.find(queryDocument).first();
            if (ticket.isEmpty()) {
                return null;
            } else {
                return bsonToTicket(ticket);
            }
        });
    }

    public void deleteTicket(String ticketCode) {
        exector.execute("ticket", collection -> {
            collection.findOneAndUpdate(new Document("code", ticketCode),
                    new Document("expire_time", System.currentTimeMillis() - 1));
            return true;
        });
    }

    private TicketEntity bsonToTicket(Document ticket) {
        TicketEntity entity = new TicketEntity();
        entity.setUserIdentity(ticket.get("user_identity").toString());
        entity.setCreatedTime(Long.parseLong(ticket.get("created_time").toString()));
        entity.setExpireTime(Long.parseLong(ticket.get("expire_time").toString()));
        entity.setName(ticket.get("name").toString());
        entity.setCode(ticket.get("code").toString());
        return entity;
    }
}