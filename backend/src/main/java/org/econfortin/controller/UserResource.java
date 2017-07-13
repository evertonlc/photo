package org.econfortin.controller;

import org.econfortin.model.User;
import org.econfortin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class UserResource {

    @Autowired
    private UserService userService;

    @RequestMapping("/user/users")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @RequestMapping(value = "/user/", method = RequestMethod.POST)
    public User findUser(@RequestBody String username) {
        return userService.findByUserName(username);
    }
}
