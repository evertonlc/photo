package org.econfortin.service.impl;

import org.econfortin.dao.CommentDao;
import org.econfortin.model.Comment;
import org.econfortin.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDao commentDao;

    @Override
    public void save(Comment comment) {
        commentDao.save(comment);
    }

    @Override
    public List<Comment> findByPhotoId(Long photoId) {
        return commentDao.findByPhotoId(photoId);
    }

    @Override
    public Comment findOne(Long commentId) {
        return commentDao.findOne(commentId);
    }
}
