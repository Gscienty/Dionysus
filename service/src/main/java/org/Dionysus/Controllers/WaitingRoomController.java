package org.Dionysus.Controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.Dionysus.InteractionEntity.TicketEntity;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 等候室控制器
 */
@EnableAutoConfiguration
@RestController
public class WaitingRoomController {

    /**
     * 进入等候室 
     */
    @RequestMapping(value = { "/waiting/{room_id}" }, method = { RequestMethod.PUT })
    public void enterWaitingRoom(@PathVariable("room_id") String room, @RequestBody TicketEntity ticket,
            HttpServletResponse response) {

    }

    /**
     * 查看特定等候室的状况
    */
    @ResponseBody
    @RequestMapping(value = { "/waiting/{room_id}" }, method = { RequestMethod.GET }, produces = { "application/json" })
    public String getSpecialWaitingRoomState(@PathVariable("room_id") String room) {
        return "";
    }

    /**
     * 删除特定等候室的票据
     */
    @RequestMapping(value = { "/waiting/{room_id}/{ticket_code}" }, method = { RequestMethod.DELETE }, produces = {
            "application/json" })
    public void delereSpecialTicketFromWaitingRoom(@PathVariable("room_id") String room,
            @PathVariable("ticket_code") String ticket,
            HttpSession session,
            HttpServletResponse response) {

    }
}