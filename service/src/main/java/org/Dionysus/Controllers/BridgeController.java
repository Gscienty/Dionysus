package org.Dionysus.Controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@EnableAutoConfiguration
@RestController
public class BridgeController {
    
    @ResponseBody
    @RequestMapping(value = { "/bridge/linkto/{bob_ticket}/diffle-hellman/{big_prime}/{small_prime}/{random_number}" },
        method = { RequestMethod.PUT })
    public String createBridge(@PathVariable("bob_ticket") String bob,
        @PathVariable("big_prime") int bigPrime,
        @PathVariable("small_prime") int smallPrime,
        @PathVariable("random_number") int randomNumber,
        HttpSession session,
        HttpServletResponse response) {
        
        return "";
    }

    @ResponseBody
    @RequestMapping(value = { "/bridge" }, method = { RequestMethod.GET })
    public String getBridge(HttpSession session, HttpServletResponse response) {
        return "";
    }

    @RequestMapping(value = { "/bridge" }, method = { RequestMethod.DELETE })
    public void deleteBridge(HttpSession session, HttpServletResponse response) {

    }

    @RequestMapping(value = { "/bridge/report/{bridge_code}/{encrypt_key}" }, method = { RequestMethod.PUT },
        consumes = { "application/json" }, produces = { "application/json" })
    public void reportBridge(@RequestBody String backup, HttpSession session, HttpServletResponse response) {
        
    }
}