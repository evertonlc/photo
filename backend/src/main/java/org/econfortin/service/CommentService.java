package org.econfortin.service;

import org.econfortin.model.Comment;

import java.util.List;

public interface CommentService {
    void save(Comment comment);

    List<Comment> findByPhotoId(Long photoId);

    Comment findOne(Long photoId);
}
