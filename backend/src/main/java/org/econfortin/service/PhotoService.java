package org.econfortin.service;

import org.econfortin.model.Photo;
import org.econfortin.model.User;

import java.util.List;

public interface PhotoService {

    public Photo save(Photo photo);

    public List<Photo> findAll();

    public List<Photo> findByUser(User user);

    public Photo findByPhotoId(Long photoId);

}
