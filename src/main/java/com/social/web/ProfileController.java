package com.social.web;

import com.social.service.Messages;
import com.social.service.SecurityService;
import com.social.service.UserService;
import com.social.validators.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

@Controller
public class ProfileController {

    @Autowired
    HttpServletRequest request;

    @Autowired
    ServletContext context;

    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private Messages msg;


    @RequestMapping(value = {"/myprofile"}, method = RequestMethod.GET)
    public String myprofile(Model model) {
        return "myprofile";
    }

}
