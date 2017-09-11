package org.Dionysus.Controllers;

import javax.servlet.http.HttpSession;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@EnableAutoConfiguration
@RestController
public class HomeController {
    
    @ResponseBody
    @RequestMapping(
        value = "/",
        method = { RequestMethod.GET },
        produces = { "text/plain" }
    )
    public String SayHello(HttpSession session) {
        session.setAttribute("user_identity", System.currentTimeMillis() + "TEST");
        return "Hi guys, this is Dionysus.";
    }
}