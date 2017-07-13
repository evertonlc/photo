package org.econfortin.controller;

import org.econfortin.model.Photo;
import org.econfortin.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/photo")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @RequestMapping("/all")
    public List<Photo> getAllPhotos() {
        return photoService.findAll();
    }

}
