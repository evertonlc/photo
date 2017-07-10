package org.econfortin.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.econfortin.model.User;
import org.econfortin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.util.Date;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/login", method = RequestMethod.POST)
    public String login(@RequestBody Map<String, String> json) throws ServletException {
        String userName = json.get("username");
        String password = json.get("password");

        if(Objects.isNull(userName) || Objects.isNull(password)) {
            throw new ServletException("Please fill in username and password");
        }

        User user = userService.findByUserName(userName);

        if(Objects.isNull(user)) {
            throw new ServletException("User name not found");
        }

        if(!Objects.equals(user.getPassword(), password)) {
            throw new ServletException("Invalid login. Please chech you username and password");
        }

        return Jwts.builder()
                .setSubject(userName)               //User
                .claim("roles", "user")        //Profile
                .setIssuedAt(new Date())            //Data
                .signWith(SignatureAlgorithm.HS256, "secretkey").compact();
    }

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }
}
