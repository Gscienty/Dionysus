package org.Dionysus;

import org.Dionysus.Component.MongoExecutor;
import org.Dionysus.Component.NameDictionary;
import org.Dionysus.Controllers.BridgeController;
import org.Dionysus.Controllers.HomeController;
import org.Dionysus.Controllers.TicketController;
import org.Dionysus.Controllers.WaitingRoomController;
import org.Dionysus.Services.TicketService;
import org.springframework.boot.SpringApplication;

public class Startup {
    public static void main(String[] args) {
        SpringApplication.run(new Object[] {
            MongoExecutor.class,
            NameDictionary.class,

            HomeController.class,
            BridgeController.class,
            TicketController.class,
            WaitingRoomController.class,
            
            TicketService.class,
        }, args);
    }
}