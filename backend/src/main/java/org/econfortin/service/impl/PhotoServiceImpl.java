package org.econfortin.service.impl;

import org.econfortin.dao.PhotoDao;
import org.econfortin.model.Photo;
import org.econfortin.model.User;
import org.econfortin.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoServiceImpl implements PhotoService {

    @Autowired
    private PhotoDao dao;

    @Override
    public Photo save(Photo photo) {
        return dao.save(photo);
    }

    @Override
    public List<Photo> findAll() {
        return dao.findAll();
    }

    @Override
    public List<Photo> findByUser(User user) {
        return dao.findByUser(user);
    }

    @Override
    public Photo findByPhotoId(Long photoId) {
        return dao.findByPhotoId(photoId);
    }
}
