package org.Dionysus.Controllers;

import com.google.gson.Gson;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.Dionysus.InteractionEntity.TicketEntity;
import org.Dionysus.Services.TicketService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 票据控制器 
 */
@EnableAutoConfiguration
@RestController
public class TicketController {

    @Autowired
    private TicketService ticketService;

    private Logger logger = LoggerFactory.getLogger(TicketController.class);

    /**
     * 创建关联当前用户的票据
     */
    @RequestMapping(value = { "/ticket" }, method = { RequestMethod.PUT })
    public void create(HttpServletResponse response, HttpSession session) {
        logger.debug("create a ticket");
        Boolean result = ticketService.create(session.getAttribute("user_identity").toString());

        if(result) {
            response.setStatus(HttpStatus.CREATED.value());
        }
        else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
        }
    }

    /**
     * 获取关联当前用户的票据
     */
    @ResponseBody
    @RequestMapping(value = { "/ticket" }, method = { RequestMethod.GET }, produces = { "application/json" })
    public String get(HttpServletResponse response, HttpSession session) {
        TicketEntity ticket = ticketService.getUserTicket(session.getAttribute("user_identity").toString());
        if(ticket == null) {
            response.setStatus(HttpStatus.NOT_FOUND.value());
        }
        return new Gson().toJson(ticket);
    }

    /**
     * 获取某个票据的具体信息
     */
    @ResponseBody
    @RequestMapping(value = { "/ticket/{ticket_code}" }, method = { RequestMethod.GET },
        produces = { "application/json" })
    public String specialGet(@PathVariable("ticket_code") String ticketCode, HttpServletResponse response,
        HttpSession session) {
        TicketEntity ticket = ticketService.getTicket(ticketCode);
        if (ticket == null) {
            response.setStatus(HttpStatus.NOT_FOUND.value());
            return "";
        }
        else {
            return new Gson().toJson(new Object() {
                public String getCode() { return ticket.getCode(); }
                public String getName() { return ticket.getName(); }
                public long getCreatedTime() { return ticket.getCreatedTime(); }
                public long getExpireTime() { return ticket.getExpireTime(); }
            });
        }
    }

    /**
     * 删除关联当前用户的票据
     */
    @RequestMapping(value = { "/ticket/{ticket_code}" }, method = { RequestMethod.DELETE })
    public void deleteTicket(@PathVariable("ticket_code") String ticketCode, HttpServletResponse response,
        HttpSession session) {
        TicketEntity ticket = ticketService.getUserTicket(session.getAttribute("user_identity").toString());
        if (ticket == null) {
            response.setStatus(HttpStatus.NOT_ACCEPTABLE.value());
            return;
        }
        else if (ticket.getCode() != session.getAttribute("user_identity").toString()) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            return;
        }
        ticketService.deleteTicket(ticket.getCode());
        response.setStatus(HttpStatus.ACCEPTED.value());
    }
}